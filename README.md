# parcel
provide local server
auto refresh
dev build
HMR = Hot Module Replacement
using caching - faster builds
File Watching Algorithm (c++)
bundling , minif ization, compressing

# transitive dependencies
 dependency of one node modeule ont ot other node modeule
 
# using react create object and tag:

<!-- <script>
    import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", {}, "Hello world from Reeeeeacttt !!!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
</script> -->

# using javascript create tag 
<!-- 
  <script>
        const heading = document.createElement("h1");
        heading.innerHTML = " Hello World from javascript";

        const viv = document.getElementById("root");
        viv.appendChild(heading);
  </script>  -->

  # JSX
  -JSX is not a html
  -It is a HTML like or XML like
  -JSX is transpiled by parcel so that  browser or   js engine can understand it {
    parcel done it with the help of babel
    Babel is javascript compiler
  } 

  # React Functional and class Component

  // React Element
const heading = (<h1 className="head">Hello from JSX!!</h1>);

 React Component
 Class Based Component-OLD
 Functional Based Component-NEW

// React functional component-->
     A react functional component is a funtion which return some piece of jsx
--- way 1;
    const Headingcomponent = () => {
       return <h1>Namaste from Vivek!!</h1>;
     };
--- way 2;
    const Headingcomponent2 = () => 
    (<h1>Namaste from Vivek!!</h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); ----> way to render react element
root.render(<Headingcomponent/>)  ---> way to render react component
