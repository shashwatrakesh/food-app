import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <h1 className="heading" tabIndex="5">
      Hello World from React using JSX 🚀!
    </h1>
  );
};

const HeadingComponent = () => (
  <>
    <div id="container">
      <Title />
      {Title()}
      <Title></Title>

      <h1 className="heading">Namaste React Functional Component</h1>
    </div>
    <div id="container-2"></div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); // Now it becaomes an HTML element when we render it on the DOM.

//using multiple roots
// const root2 = ReactDOM.createRoot(document.getElementById("root2"));
// root2.render(titleElement); // Now it becomes an HTML element when we render it on the DOM.
