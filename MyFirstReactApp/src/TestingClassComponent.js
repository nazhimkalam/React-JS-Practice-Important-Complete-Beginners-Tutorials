import React from "react";

// function ClassBased(){
//     console.log("Inside functional component");
//     return(
//         <div>
//             <h1>Hello world</h1>
//         </div>
//     )
// }

// (When running class based comment out all the functional based related code)
class ClassBased extends React.Component {
  myMethod() {
    const name = "Nazhim kalam";
    return name;
  }
  render() {
    console.log("Inside class component");
    return (
      <div>
        <h1>Hello world</h1>
        <h2>{this.myMethod()}</h2>
      </div>
    );
  }
}

export default ClassBased;
