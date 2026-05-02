import React from "react";
import ReactDOM from "react-dom/client";

// const heading=React.createElement("h1", { id: "heading", className: "header" }, "Hello world using React #1");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const jsxHeading = (
//   <h1 id="heading" className="header">
//     Hello world <br /> using React #2
//   </h1>
// );
// console.log(jsxHeading);

//----------------------------------------------
//React  functional components: is a function that returns JSX. It is a simple way to create a component in React. It is a pure function that takes props as an argument and returns JSX. It does not have any state or lifecycle methods. It is also known as stateless component.
 function Title(){
  return <h1>Title of the page🚀</h1>
 }
 function Heading(){
  return <h1 id="heading" style={{color: "blue"}}>Heading of the page🚀</h1>
 }  

 function Footer(){
  return <h1 style={{color: "green"}}>Footer of the page🚀</h1>
 }
 const paragraph = <p>This is a paragraph.</p>;
 const HeadingComponent = () => (
  <div>
  <Title />
  <Title> </Title>
  {Title()}
  <Heading />
  {paragraph}
  <Footer />
  </div>
 );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent></HeadingComponent>);


