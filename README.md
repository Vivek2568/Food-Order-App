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

1. Class Based component:-
   class UserClass extends React.Component{

   constructor(props){
    super(props);
    }
     render(){
      return(
        <h1>{this.props.name}or VIVEK</h1>
      )
     }
   }

2. Function Based component:-
    const User =(props)=>{
      return(
        <h1> {props.name} or VIVEK</h1>
      )
    }

so class based comp. extend react component and uses a render method to display the js class

for receiving props we need to make constructor to receive it. 

Life Cycle methods of Class Based Component:-
 constructor()
 render(){
  if child present its life cycle(
    constructor()
     render()
     componentdidMount()
  )
 }
 componentdidMount() ---> to make an API call


if more than 1 child(
   constructor()
   render()
     child1 cconstructor()
     child1 render()
     child2 cconstructor()
     child2 render()
     child1 componentdidMount() 
     child2 componentdidMount()
  componentdidMount()
)

# REACT HOOKS
Normal js utility functions
-UseState()
-whenever a state variable update react Rerender the component

-UseEffect()
   useeffect(()=>{
    callback function
   },[]) //syntax
 ->working as soon as body or react component renders finishes  it callback function get called and rerender the UI.
 ->useEffect Is generally used to make API calls
 after React component renders so that it proovide good user experience


 FETCH -> a function given by js engine or browser to fetch data from APIs
   

# Reconciliation Algorithm (React fiber)
  Q-why react is fast??
  Ans- becz it is doing operation on virtual dom  
  virtual dom is javascript object
 -DIFF algorithm 
  whenever is change in the state variable diff algorithm finds the difference between two virtual DOM (old and new)  on every render
   
# MICRO SERVICES and MONOLITH ARCHITECTURE
 Monolith-> all services like Backend ,UI, API authentication, databases ,sms sending etc are  
 in the same project  whenever we changes anything we need to compile and deploy the whole project.

Microservices architecture-> all services like Backend ,UI, API authentication, databases ,sms sending etc are  
acts as individual and run on different ports and connect eah other for comuunication whenever we changes anything noK need to compile and deploy the whole project.

# LINK and Anchor tag
  Anchor-> refresh the whole page when we go from one page to another page { about us -> home header & body component both reload}

 LINK -> doesn't refresh the whole page when we go from one page to another page only the component   renders { about us -> home header will not render only body component refreshes}

# Types of routing
 1. Client Side Routing
 2. Server Side Routing
 3. server -> when we try to make calls from server it fetches and reload the page
 4.  client-> already every component is present  only refreshes occur in our app in SPA.  
   
# Controlled ans Uncontrolled copmponant
 controlled-> which are controlled by their parent states 

 uncontrolled-> which are uncontrolled bu their own state varicables;
  [see Restaurantcategory and itemlist  bye showitems variable as a exmple] 

# REDUX
  
  click --> (dispatch)action -->  reducer(fn) --> slice(strore)
                                                          

  (cart)updated  <--   selector(subscribed)  <-- slice (store )