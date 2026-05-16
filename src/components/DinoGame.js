import { useEffect, useRef, useState } from "react";

const CANVAS_WIDTH = 700;
const CANVAS_HEIGHT = 200;
const GROUND_Y = 160;
const DINO_X = 60;
const DINO_W = 44;
const DINO_H = 48;
const CACTUS_W = 20;
const CACTUS_H = 40;
const GRAVITY = 0.6;
const JUMP_FORCE = -13;

const DinoGame = () => {
  const canvasRef = useRef(null);
  const gameRef = useRef({
    running: false,
    started: false,
    raf: null,
    dino: { y: GROUND_Y - DINO_H, vy: 0, onGround: true },
    cacti: [],
    score: 0,
    hiScore: 0,
    speed: 5,
    frameCount: 0,
    nextCactus: 80,
    legFrame: 0,
  });
  const [display, setDisplay] = useState({ score: 0, hiScore: 0, state: "idle" });

  const jump = () => {
    const g = gameRef.current;
    if (!g.started || !g.running) {
      startGame();
      return;
    }
    if (g.dino.onGround) {
      g.dino.vy = JUMP_FORCE;
      g.dino.onGround = false;
    }
  };

  const startGame = () => {
    const g = gameRef.current;
    g.running = true;
    g.started = true;
    g.dino = { y: GROUND_Y - DINO_H, vy: 0, onGround: true };
    g.cacti = [];
    g.score = 0;
    g.speed = 5;
    g.frameCount = 0;
    g.nextCactus = 80;
    g.legFrame = 0;
    setDisplay((d) => ({ ...d, score: 0, state: "running" }));
    if (g.raf) cancelAnimationFrame(g.raf);
    loop();
  };

  const loop = () => {
    const g = gameRef.current;
    if (!g.running) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    g.frameCount++;
    g.legFrame = Math.floor(g.frameCount / 8) % 2;

    // Speed up gradually
    if (g.frameCount % 500 === 0) g.speed = Math.min(g.speed + 0.5, 14);

    // Dino physics
    g.dino.vy += GRAVITY;
    g.dino.y += g.dino.vy;
    if (g.dino.y >= GROUND_Y - DINO_H) {
      g.dino.y = GROUND_Y - DINO_H;
      g.dino.vy = 0;
      g.dino.onGround = true;
    }

    // Spawn cacti
    g.nextCactus--;
    if (g.nextCactus <= 0) {
      const h = CACTUS_H + Math.floor(Math.random() * 20);
      g.cacti.push({ x: CANVAS_WIDTH + 10, h });
      g.nextCactus = 60 + Math.floor(Math.random() * 60);
    }

    // Move cacti
    g.cacti = g.cacti
      .map((c) => ({ ...c, x: c.x - g.speed }))
      .filter((c) => c.x > -CACTUS_W - 10);

    // Collision
    const dinoRect = { x: DINO_X + 6, y: g.dino.y + 4, w: DINO_W - 12, h: DINO_H - 8 };
    for (const c of g.cacti) {
      const cy = GROUND_Y - c.h;
      if (
        dinoRect.x < c.x + CACTUS_W &&
        dinoRect.x + dinoRect.w > c.x &&
        dinoRect.y < cy + c.h &&
        dinoRect.y + dinoRect.h > cy
      ) {
        g.running = false;
        g.hiScore = Math.max(g.hiScore, g.score);
        setDisplay({ score: g.score, hiScore: g.hiScore, state: "dead" });
        drawFrame(ctx, g);
        return;
      }
    }

    // Score
    g.score = Math.floor(g.frameCount / 6);
    if (g.frameCount % 6 === 0)
      setDisplay((d) => ({ ...d, score: g.score }));

    drawFrame(ctx, g);
    g.raf = requestAnimationFrame(loop);
  };

  const drawFrame = (ctx, g) => {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Sky
    ctx.fillStyle = "#f7f7f7";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Ground
    ctx.strokeStyle = "#555";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, GROUND_Y);
    ctx.lineTo(CANVAS_WIDTH, GROUND_Y);
    ctx.stroke();

    // Dino body
    ctx.fillStyle = g.running ? "#333" : "#c0392b";
    const dx = DINO_X;
    const dy = g.dino.y;

    // Body
    ctx.fillRect(dx + 4, dy + 10, DINO_W - 8, DINO_H - 18);
    // Head
    ctx.fillRect(dx + 14, dy, 24, 20);
    // Eye
    ctx.fillStyle = "#fff";
    ctx.fillRect(dx + 30, dy + 4, 6, 6);
    ctx.fillStyle = "#000";
    ctx.fillRect(dx + 32, dy + 6, 3, 3);
    // Mouth
    ctx.fillStyle = g.running ? "#333" : "#c0392b";
    ctx.fillRect(dx + 34, dy + 14, 6, 3);

    // Legs
    ctx.fillStyle = g.running ? "#333" : "#c0392b";
    if (g.dino.onGround) {
      if (g.legFrame === 0) {
        ctx.fillRect(dx + 8, dy + DINO_H - 16, 10, 16);
        ctx.fillRect(dx + 22, dy + DINO_H - 8, 10, 8);
      } else {
        ctx.fillRect(dx + 8, dy + DINO_H - 8, 10, 8);
        ctx.fillRect(dx + 22, dy + DINO_H - 16, 10, 16);
      }
    } else {
      ctx.fillRect(dx + 8, dy + DINO_H - 14, 10, 14);
      ctx.fillRect(dx + 22, dy + DINO_H - 14, 10, 14);
    }

    // Tail
    ctx.fillRect(dx - 8, dy + 14, 14, 8);

    // Cacti
    ctx.fillStyle = "#27ae60";
    for (const c of g.cacti) {
      const cy = GROUND_Y - c.h;
      ctx.fillRect(c.x, cy, CACTUS_W, c.h);
      ctx.fillRect(c.x - 8, cy + 10, 8, c.h - 10);
      ctx.fillRect(c.x + CACTUS_W, cy + 14, 8, c.h - 14);
    }

    // Dead overlay
    if (!g.running && g.started) {
      ctx.fillStyle = "rgba(0,0,0,0.35)";
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.fillStyle = "#fff";
      ctx.font = "bold 28px monospace";
      ctx.textAlign = "center";
      ctx.fillText("GAME OVER", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 16);
      ctx.font = "16px monospace";
      ctx.fillText("Press Space / Tap to Restart", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 16);
    }

    // Idle
    if (!g.running && !g.started) {
      ctx.fillStyle = "#555";
      ctx.font = "16px monospace";
      ctx.textAlign = "center";
      ctx.fillText("Press Space / Tap to Start", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 10);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    drawFrame(ctx, gameRef.current);

    const onKey = (e) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        jump();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (gameRef.current.raf) cancelAnimationFrame(gameRef.current.raf);
    };
  }, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <span style={styles.offline}>🔴 You are offline</span>
        <div style={styles.scores}>
          <span style={styles.scoreLabel}>HI {String(display.hiScore).padStart(5, "0")}</span>
          <span style={styles.scoreLabel}>{String(display.score).padStart(5, "0")}</span>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        style={styles.canvas}
        onClick={jump}
      />
      <p style={styles.hint}>⬆ Space / Arrow Up / Tap to jump — avoid the cacti!</p>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "60vh",
    fontFamily: "monospace",
    userSelect: "none",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    width: "700px",
    marginBottom: "8px",
  },
  offline: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#c0392b",
  },
  scores: {
    display: "flex",
    gap: "16px",
  },
  scoreLabel: {
    fontSize: "18px",
    color: "#555",
    fontWeight: "bold",
  },
  canvas: {
    border: "2px solid #ccc",
    borderRadius: "8px",
    cursor: "pointer",
    background: "#f7f7f7",
    maxWidth: "100%",
  },
  hint: {
    marginTop: "10px",
    color: "#888",
    fontSize: "13px",
  },
};

export default DinoGame;
