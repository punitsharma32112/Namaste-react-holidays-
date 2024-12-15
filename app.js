import React from "react";
import ReactDOM from "react-dom/client"
// // First React code
// //how to create nested type of structure in react 
// //what we are creating 
// //<div id="parent">
// //now suppose if i want to make two children from it then what i have to do ?
// //creat another array and store them into it just simple 
// /* <div id="child">//
//     <h1>I am h1 tag</h1>
// //supppose you want to create siblings that is another h2 tag what you will do ??
//    <h2>i am h2 tag</h2>
//    //so to pass through that you have to convert that 3rd child into an array
// </div> */
// //here parent is object that is a react element =>html (browser understands)
// //write react always upper than js and order matters there 
// //what is crossorigin  there ??
// //
// const parent = React.createElement(
//     "div",
//      { id: "parent" }, 
//     [ React.createElement(
//         "div",
//          { id: "child1" },
//          [React.createElement("h1",{},"i   am djj h1 tag and powerful"),React.createElement("h2",{},"i am h2 tag")]
//         ),React.createElement(
//             "div",
//              { id: "child2" },
//              [React.createElement("h3",{}," i am h3 tag"),React.createElement("h4",{},"i am h4 tag")]
//             )]
//     );
//     //jsx exist for this problem 
//     //jsx makes our life easy so we are not going to use react.createelement now in future as it is making more complex as compare to normal 
// const heading = React.createElement(
//     "h1",
//     { id: "header" }, // Ensure 'id' is lowercase
//     "Hello World from React!"
// );
// console.log(parent);
// // Create the root
// //root.render is replaced with what is i am going to do in rendering 
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent); 
// //lets hust create a npm script so that we dont have to write npx parcel index.html again and again
//create react element
const heading=React.createElement(
    "h1",
    {id:"heading"},
    "Namaste React Punit sharma"
);
//jsx{transpiled before it reaches the js engine}-Parcel-Babel(normal javascript package)
//jsx -html like or xml like syntax
//jsx developed by facebook (jsx is not a part of react)//jsx is different and react is different 
// jsx=>react.createElement=>react element-js object=>html
const jsxHeading=(<h1 className="head"
 tabIndex="1">
    Namaste react using jsx
    </h1>);
console.log(jsxHeading);
const root=ReactDOM.createRoot(document.getElementById("root"))
console.log(heading)
root.render(jsxHeading);
//react components
// class based components-old way
// functional based components-new 





