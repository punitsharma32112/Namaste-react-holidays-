// First React code
//how to create nested type of structure in react 
//what we are creating 
//<div id="parent">
//now suppose if i want to make two children from it then what i have to do ?
//create another array and store them into it just simple 
{/* <div id="child">//
    <h1>I am h1 tag</h1>
//supppose you want to create siblings that is another h2 tag what you will do ??
   <h2>i am h2 tag</h2>
   //so to pass through that you have to convert that 3rd child into an array
</div> */}
//here parent is object that is a react element =>html (browser understands)
//write react always upper than js and order matters there 
//what is crossorigin  there ??
//
const parent = React.createElement(
    "div",
     { id: "parent" }, 
    [ React.createElement(
        "div",
         { id: "child1" },
         [React.createElement("h1",{},"i am h1 tag"),React.createElement("h2",{},"i am h2 tag")]
        ),React.createElement(
            "div",
             { id: "child2" },
             [React.createElement("h3",{},"i am h3 tag"),React.createElement("h4",{},"i am h4 tag")]
            )]
    );

    //jsx exist for this problem 
    //jsx makes our life easy so we are not going to use react.createelement now in future as it is making more complex as compare to normal 

const heading = React.createElement(
    "h1",
    { id: "header" }, // Ensure 'id' is lowercase
    "Hello World from React!"
);
console.log(parent);

// Create the root
//root.render is replaced with what is i am going to do in rendering 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 
