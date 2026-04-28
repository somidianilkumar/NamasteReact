 
 // creating heading element using React
 const root = ReactDOM.createRoot(document.getElementById("root"));
 const heading = React.createElement("h1", { id: "heading", className: "header" }, "Hello world using React #1");
 root.render(heading);

 //1. Creating nested heading element using React
 const parent=React.createElement("div", 
    {id:"parent"},
    React.createElement("div", {id:"child"}, 
        React.createElement("h1", {}, "Hello world using React #2")));
//   root.render(parent);

  //2. Creating nested heading element using React with sibling of h1 and h2
  const parent1=React.createElement("div", 
    {id:"parent"},
    React.createElement("div", {id:"child"}, 
        [React.createElement("h1", {}, "inside h1 tag"),
            React.createElement("h2", {}, "inside h2 tag")]));
//   root.render(parent1);

    //3. Creating nested heading element using React with sibling of child1 and child2
    const parent2=React.createElement("div", 
    {id:"parent"},
    [React.createElement("div", {id:"child1"}, 
        [React.createElement("h1", {}, "inside h1 tag"),
        React.createElement("h2", {}, "inside h2 tag")]),
    React.createElement("div", {id:"child2"}, 
        [React.createElement("h1", {}, "inside h1 tag"),
        React.createElement("h2", {}, "inside h2 tag")])]);
  root.render(parent2);

