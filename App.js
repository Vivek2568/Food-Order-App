import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const title = (<h1 className="head">Hello from JSX!!</h1>);

const Headingcomponent2 = () => {
  return <h1>Namaste from Vivek!!</h1>;
};
const Headingcomponent = () => (
   <div>
     {title}
     
    <h1>Namaste from Vivek!!</h1>
   </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Headingcomponent />);
