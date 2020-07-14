// import React from "react";
// import ReactDOM from "react-dom";

// Task 01
// function MyApp(){
//   return(
//     <ul>
//       <li>Apple</li>
//       <li>Orange</li>
//       <li>Pear</li>
//       <li>Grapes</li>
//       <li>Banana</li>
//     </ul>
//   )
// }

// ReactDOM.render(
//   <MyApp/>,
//   document.getElementById("root")
// );

//-------------------------------------------------------------------------------------------------------------------

// Task 02
// import React from "react";
// import ReactDOM from "react-dom";
// import MyInfo from "./component/MyInfo.js"        // the dot ./ refers to the current folder
// ReactDOM.render(<MyInfo />, document.getElementById("root"));

//-------------------------------------------------------------------------------------------------------------------

// Task 03
// import React from "react";

// import ReactDOM from "react-dom";
// import App from "./component/App.js";

// ReactDOM.render(<App />, document.getElementById("root"));

//-------------------------------------------------------------------------------------------------------------------

// Task 04
// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./component/checkBox-container/App.js"

// ReactDOM.render(<App />, document.getElementById('root'));

//-------------------------------------------------------------------------------------------------------------------

// Task 05 (adding external CSS)
// import React from "react";
// import ReactDOM from "react-dom";
// import "./style.css";

// ReactDOM.render(
//   <h1 className="editHead">Header</h1>,
//   document.getElementById("root")
// );

//-------------------------------------------------------------------------------------------------------------------

// Task 06 ( Working with date and time )
// import React from "react";
// import ReactDOM from "react-dom";

// let dateTime = new Date();
// ReactDOM.render(
//   <div>The time is {'' + dateTime}</div>,
//   document.getElementById("root")
// );

//-------------------------------------------------------------------------------------------------------------------

// Task 07 ( using inline styles CSS )
// import React from "react";
// import ReactDOM from "react-dom";

// const date = new Date();

// let style = {
//   fontSize: "50px",
//   textAlign: "center",
//   position: "absolute",
//   top: "42%",
//   left: "40%",
// };

// if ((date.getHours() > "00") & (date.getHours() < 13)) {
//   style.color = "blue";
// } else {
//   style.color = "red";
// }

// ReactDOM.render(
//   <div style={style}>Harry Potter </div>,
//   document.getElementById("root")
// );

//-------------------------------------------------------------------------------------------------------------------

// Task 08
// import React from "react";
// import ReactDOM from "react-dom";
// import "./style.css";
// import Todo from "./Todo.js";
// ReactDOM.render(
//   <div className="Todo">
//     <Todo />
//     <Todo />
//     <Todo />
//     <Todo />
//   </div>,
//   document.getElementById("root")
// );

//-------------------------------------------------------------------------------------------------------------------

// Task 09 ( How to send Parameters to a JSX function )

// NOTE: We don't send multiple parameters to the JSX function instead we normally send an Object as a parameter
// for the funciton.
// This is property is best to be made as an object or (JSON) file format {...}

// import React from "react";
// import ReactDOM from "react-dom";
// import "./style.css";
// import Contacts from "./Contacts.js";

// ReactDOM.render(
//   <div className="contactDetails">
//     <div className="contact">Contacts</div>

//     <Contacts
//       details={{
//         imageUrl: "./images/person1.jpg",
//         Name: "Nazhim kalam",
//         Email: "nazhimkalam@gmail.com",
//         PhoneNumber: "(+94) 76 435 6773",
//       }}
//     />
//     <Contacts
//       details={{
//         imageUrl: "./images/person2.jpg",
//         Name: "Hashim kalam",
//         Email: "hashimkalam@gmail.com",
//         PhoneNumber: "(+94) 76 546 0213",
//       }}
//     />
//     <Contacts
//       details={{
//         imageUrl: "./images/person3.jpg",
//         Name: "Abdul kalam",
//         Email: "abdulkalam@gmail.com",
//         PhoneNumber: "(+94) 71 512 6235",
//       }}
//     />
//     <Contacts
//       details={{
//         imageUrl: "./images/person4.jpg",
//         Name: "Jhon cena",
//         Email: "ucantcme@gmail.com",
//         PhoneNumber: "(+94) 76 111 6969",
//       }}
//     />
//   </div>,
//   document.getElementById("root")
// );

//-------------------------------------------------------------------------------------------------------------------

// Task 10 ( VERY IMPORTANT , Props and Styling practice using TERMINATOR or conditions in CSS styling )
// import React from "react";
// import ReactDOM from "react-dom";
// import QA from "./QA.js";

// ReactDOM.render(
//   <div>
//     <QA question="What is your name" answer="I am Nazhim Kalam" />
//     <QA question="What is your age" answer="18" />
//     <QA question="What is your favorite food" answer="Pizza" />
//     <QA question="What is your favorite colour" answer="Red" />
//     <QA
//       // Notice no question here (Important Part)
//       answer="Programming Principles 02"
//     />
//   </div>,
//   document.getElementById("root")
// );

//-------------------------------------------------------------------------------------------------------------------

// Task 11 ( Mapping Components )

// Exmaples of how map() works
// The' map() method' creates a 'new array 'by 'calling a provided function on every element in the calling array'.

// Example 01   'Number'
// Here comes the main MAP COMPONENT CONCEPT
// import React from "react";
// import ReactDOM from "react-dom";
// import APIInfo from "./APIinfo.js";
// import APIdata from "./APIsampleData.js";

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map((num) => Math.pow(num, 2)); // function noted by the arrow method

// console.log("Original data set", numbers);
// console.log("Data set after applying the map()", squaredNumbers);

// // Example 02    'String'
// const names = ["Nazhim", "Hashim", "Abdul"];
// const alteredNames = names.map((name) => name + " kalam");

// console.log("Original data set", names);
// console.log(alteredNames);

// // Exmaple 03 'JSON string'
// const obj = [
//   {
//     name: "Nazhim",
//     age: 18,
//   },
//   {
//     name: "Hashim",
//     age: 14,
//   },
// ];
// const obj2 = obj.map(function (element) {
//   element.name = element.name + " kalam";
//   element.age = element.age + 10;
//   return element;
// });

// console.log(obj, "Original Object"); // note it overrides the obj aswell with obj2 content
// console.log(obj2, "Altered Object");

// // The filter() method creates an array filled with all array elements that pass a test (provided as a function)
// const integers = [1, 2, 3, 4, 5];
// const fliteredIntegers = integers.filter((num) => num > 3);
// console.log("Original data set", integers);
// console.log("Altered Data set", fliteredIntegers);

// // main part ( MAPPING COMPONENTS )

// const mainProgram = APIdata.map((element) => (
//   <APIInfo name={element.name} age={element.age} key={element.id} />
// )); // this 'key' cannot be accessed its like a madatory attribute to check if each and every data are unique from the API

// ReactDOM.render(<div>{mainProgram}</div>, document.getElementById("root"));

//-------------------------------------------------------------------------------------------------------------------

// Task 12  ( Mapping Components Practice )

// ---> For this question I have few tasks to complete
//          *   Create a JS file with JSON data (food data) which relavtivly looks like data froma an API (Application Program Interface).
//          *   We have to create a food Component
//          *   Transfer the contents from the API file to the Component using props
//          *   Get the check box data (true or false) from the API and update them properly
//          *   Render the Components properly.
//          *   Don't forget the map() and the "key" in props

// import React from "react";
// import ReactDOM from "react-dom";
// import foodData from "./APIfoodchecks";
// import Food from "./Food.js";
// import "./style.css";

// const mainFoodDataComponent = foodData.map((food) => (
//   <Food name={food.name} key={food.id} select={food.selected} />
// ));

// ReactDOM.render(
//   <div className="mainfood">{mainFoodDataComponent}</div>,
//   document.getElementById("root")
// );

//-------------------------------------------------------------------------------------------------------------------

//  Task 13 ( Class based components )
// Previously we were dealing with funcitonal components but now we are jumping from functional to class based components.
// Note: Components are something in this format <ComponentName />
// Let's do an example of Functional based component and Class based Component

// import React from "react";
// import ReactDOM from "react-dom";
// import TestingClass from "./TestingClassComponent.js";

// Functional based component
// ReactDOM.render(<TestingClass />, document.getElementById("root"));

// Class based component (When running class based comment out all the functional based related code)
// ReactDOM.render(<TestingClass />, document.getElementById("root"));

//-------------------------------------------------------------------------------------------------------------------

// Task 14  ( Class Based Components Practice )
// import React from "react"; // allows for the use of JSX
// import ReactDOM from "react-dom"; // allows to Render
// import AppComponent from "./AppComponent.js";

// ReactDOM.render(<AppComponent />, document.getElementById("root"));

//-------------------------------------------------------------------------------------------------------------------

// Task 15 ( STATES )

// React components has a built-in state object.

// The state object is where you store property values that belongs to the component.

// When the state object changes, the component re-renders.

// Note: The CHILD COMPONENT can access the Parent Component through props only given in the <ChildCompoenent xx='yy'/>

// We have 2 types of components
// --> Functional Component
// --> Class Component

// import React from "react";
// import ReactDOM from "react-dom";

// class ParentComponent extends React.Component {
//   // React.Component is an interface
//   constructor() {
//     // constructors and we have to always add super() which will inherit the constructor features from the Parent class.
//     super();
//     this.state = {
//       answer: "Yes",
//     };
//   }
//   render() {
//     return (
//       <div>
//         <h2>
//           Is it necessary to laern states?
//           {this.state.answer}
//         </h2>
//         {/* <ChildComponent data = {this.state.answer} />  this is how you pass data to child components */}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<ParentComponent />, document.getElementById("root"));

//-------------------------------------------------------------------------------------------------------------------

// Task 16 ( States Challenge )
// import React from "react";
// import ReactDOM from "react-dom";

// class App extends React.Component {
//     constructor(){
//         super()
//         this.state = {
//             name: 'Nazhim',
//             age : 18
//         }
//     }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         <h3>{this.state.age} years old</h3>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));

//-------------------------------------------------------------------------------------------------------------------

// Task 16 ( States Challenge 02)
// import React from "react";
// import ReactDOM from "react-dom";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoggedIn: true,
//     };
//   }

//   loggingDetails() {
//     let value;
//     if (this.state.isLoggedIn === true) {
//       value = "in";
//     } else {
//       value = "out";
//     }
//     return value
//   }

//   render() {
//     return (
//       <div>
//         <h1>You are currently logged (in / out): {this.loggingDetails()} </h1>  {/* Always remember the this key word */}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));

//-------------------------------------------------------------------------------------------------------------------

// Task 17 ( Handling Events in React )

// import React from "react";
// import ReactDOM from "react-dom";

// // using onClick and onMouseOver ( NOTE: There are many more event handlers refer to react documentation )
// class EventHandler extends React.Component {
//   MouseEnter = () => {
//     console.log("Entering....");
//   }; // this is also a function format

//   MouseOut = () => {
//     console.log("Leaving....");
//   };

//   render() {
//     return (
//       <div>
//         <button
//           onClick={() => {
//             console.log("I was clicked");
//           }}
//         >
//           Click me
//         </button>
//         <div>
//           <h1  onMouseEnter={this.MouseEnter} onMouseOut={this.MouseOu}>Hover Me</h1>
//         </div>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<EventHandler />, document.getElementById("root"));

//-------------------------------------------------------------------------------------------------------------------

// Task 18 ( Changing State ) Very Important

// import React from "react";
// import ReactDOM from "react-dom";
// import "./style.css";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//     this.add = this.add.bind(this);
//   }
//   add() {
//     // We can use setState to change the properties of the state
//     // There are 2 ascepts as to what you want to change:
//     // ----> If you need to override the properties with new once

//     // this.setState({
//     // count:7
//     // });

//     // ----> If you need to change the values of the properties of the previous ones (it's like having a function inside the setState() function)
//     // In here the 'previousState' paramter by default becomes the previous state content
//     this.setState((previousState) => {
//       return {
//         count: previousState.count + 1
//       };
//     });
//   }
//   render() {
//     return (
//       <div className="edit">
//         <div>
//           <h1>{this.state.count}</h1>
//         </div>

//         <div>
//           <button onClick={this.add}>
//             <h4>CHANGE</h4>
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));

//-------------------------------------------------------------------------------------------------------------------

// Task 19  (   Superb Question   )

// import React from "react";
// import ReactDOM from "react-dom";
// import foodData from "./APIfoodchecks";
// import Food from "./newFood.js";
// import "./style.css";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       foodList: foodData,
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(id_) {
//     this.setState((previousState) => {
//       const updatedDataSet = previousState.foodList.map((items) => {
//         if (items.id === id_) {
//           items.selected = !items.selected;
//         }
//         return previousState.foodList;
//       });
//       return updatedDataSet;
//     });
//   }
//   render() {
//     const mainFoodDataComponent = this.state.foodList.map((food) => (
//       <Food key={food.id} item={food} handleChange={this.handleChange} />
//     ));
//     return mainFoodDataComponent;
//   }
// }
// ReactDOM.render(
//   <div className="mainfood">
//     <App />
//   </div>,
//   document.getElementById("root")
// );

//-------------------------------------------------------------------------------------------------------------------

// Task 20  (Conditional Rendering with Life Cycle Methods )
// import React from "react";
// import ReactDOM from "react-dom";
// import Conditional from "./Conditional.js";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoading: true,
//     };
//   }

//   componentDidMount() { // this method runs auto matically after the first render
//     setTimeout(() => {  // this is just used to display the content after a given period of time
//       this.setState({ isLoading: false });  // in here we are overriding the data not calling the previous state data
//     }, 1500);           // 1500 ms
//   }

//   render() {
//     return (
//       <div>{this.state.isLoading ? <h1>Loading...</h1> : <Conditional />}</div>  // this is the ternary if condition ? :
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));

//-------------------------------------------------------------------------------------------------------------------

// Task 21 ( Further Conditional Rendering using && ) IMPORTANT CONCEPT

// What happens in && is that if the left handside is true then it display the right hand side one, true && false
// if left hand side is false it won't display anything  false && true

// import React from "react";
// import ReactDOM from "react-dom";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       messages: ["message", "message", "message", "message", "message", "message", "message", "message"],
//     };
//   }

//   render() {
//     return (
//     // <div>{this.state.messages.length > 0 ? <h1>You have {this.state.messages.length} messages to read </h1> : null}</div>  // You can do this or the below way using &&
//     <div>{this.state.messages.length && <h1>You have {this.state.messages.length} messages to read</h1>}</div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));

//-------------------------------------------------------------------------------------------------------------------

// Task 22 ( Condintional Rendering Practice )

// import React from "react";
// import ReactDOM from "react-dom";
// import "./style.css";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       log: ["Out", "In"],
//       initial: 0,
//     };
//     this.Clicked = this.Clicked.bind(this);
//   }

//   Clicked() {
//     this.setState((previousState) => {
//       if (previousState.initial === 0) {
//         previousState.initial = -1;
//       } else {
//         previousState.initial = 0;
//       }
//       return {
//         initial: previousState.initial,
//       };
//     });
//   }
//   render() {
//     return (
//       <div className="logDetails">
//         <div>
//           <h2>
//             User has logged: {this.state.log[this.state.initial === -1 ? 1 : 0]}
//           </h2>
//         </div>

//         <div>
//           <button onClick={this.Clicked}>
//             {/* Never put the brackets for functions like xxx() */}
//             <h2>Log{this.state.log[this.state.initial + 1]}</h2>
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));

//-------------------------------------------------------------------------------------------------------------------

// Task 23 ( Styling forms )

// import React from "react";
// import ReactDOM from "react-dom";
// import foodData from "./APIfoodchecks";
// import Food from "./newFood.js";
// import "./style.css";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       foodList: foodData,
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(id_) {
//     this.setState((previousState) => {
//       const updatedDataSet = previousState.foodList.map((items) => {
//         if (items.id === id_) {
//           items.selected = !items.selected;
//         }
//         return previousState.foodList;
//       });
//       return updatedDataSet;
//     });
//   }
//   render() {
//     const mainFoodDataComponent = this.state.foodList.map((food) => (
//       <Food key={food.id} item={food} handleChange={this.handleChange} />
//     ));
//     return mainFoodDataComponent;
//   }
// }
// ReactDOM.render(
//   <div className="mainfood">
//     <App />
//   </div>,
//   document.getElementById("root")
// );

//-------------------------------------------------------------------------------------------------------------------

// Task 24 ( Fetching data from an API ) Important

// import React from "react";
// import ReactDOM from "react-dom";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       Loading: false,
//       data: {},
//     };
//   }
//   componentDidMount() {
//     this.setState({ Loading: true });
//     let apiFetchUrl = "https://randomuser.me/api";
//     fetch(apiFetchUrl)
//       .then((response) => response.json())
//       .then((dataInJson) => {
//         console.log(dataInJson);
//         this.setState({
//           Loading : false,
//           data: dataInJson,
//         });
//       });
//   }

//   render() {
//     const text = this.state.Loading ? "loading . . ." : this.state.data.arrays;
//     return (
//       <div>
//         <p>{text}</p>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));

//-------------------------------------------------------------------------------------------------------------------

// Task 25 ( Forms )

// import React from "react";
// import ReactDOM from "react-dom";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       firstName: "",
//       lastName: "",
//     };
//     this.EventHandler = this.EventHandler.bind(this);
//   }

//   EventHandler(event) {
//     // event contains data of the change
//     const { name, value } = event.target; // the name and value refers to the properties of the target event directly

//     this.setState({
//       [name]: value, // square brackets used to covert form object properties into string
//     });
//   }
//   render() {
//     return (
//       <div>
//         <form>
//           <input
//             type="text"
//             placeholder="First Name"
//             name="firstName"
//             value = {this.state.firstName}
//             onChange={this.EventHandler}
//           />
//           <br />
//           <input
//             type="text"
//             placeholder="Last Name"
//             name="lastName"
//             value = {this.state.lastName}
//             onChange={this.EventHandler}
//           />
//         </form>
//         <h1>
//           {this.state.firstName} {this.state.lastName}
//         </h1>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));

//-------------------------------------------------------------------------------------------------------------------

// Task 26 ( Forms part 02 Input types )

// -------> Text Area
// -------> Check box
// -------> Radio
// -------> Drop Down
// import React from "react";
// import ReactDOM from "react-dom";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       firstName: "",
//       lastName: "",
//       myCheckbox: false,
//       color: "_______",
//       gender: "_______",
//     };
//     this.EventHandler = this.EventHandler.bind(this);
//   }

//   EventHandler(event) {
//     const { name, value, type, checked } = event.target;
//     type === "checkbox"
//       ? this.setState({ [name]: checked })
//       : this.setState({ [name]: value });
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.someSubmitEvent}>
//           {/* input text box */}
//           <input
//             type="text"
//             placeholder="First Name"
//             name="firstName"
//             value={this.state.firstName}
//             onChange={this.EventHandler}
//           />
//           <br />
//           <br />
//           <input
//             type="text"
//             placeholder="Last Name"
//             name="lastName"
//             value={this.state.lastName}
//             onChange={this.EventHandler}
//           />
//           {/* Text Area */}
//           {/* For this in react we are able to use the <textarea value = 'data inside the textarea' /> tag rather than the <textarea></textarea> */}
//           <br />
//           <br />
//           {/* <textarea
//             value="These are some random text inside the TextArea field"
//             cols="30"
//             rows="5"
//           /> */}
//           {/* Check box */}
//           <br />
//           <br />
//           <label>
//             This is my check box:
//             <input
//               type="checkbox"
//               name="myCheckbox"
//               checked={this.state.myCheckbox}
//               onChange={this.EventHandler}
//             />
//           </label>
//           {/* Radio Buttons */}
//           <br />
//           <br />

//           <label>
//             Male:
//             <input
//               name="gender"
//               type="radio"
//               // checked={this.state.gender === "Male"}         This can be used but no effect at all
//               onChange={this.EventHandler}
//               value="Male"
//             />
//           </label>

//           <br />

//           <label>
//             Female:
//             <input
//               name="gender"
//               type="radio"
//               // checked={this.state.gender === "Female"}      This can be used but no effect at all
//               onChange={this.EventHandler}
//               value="Female"
//             />
//           </label>

//           {/* Drop Down Box */}
//           <br />
//           <br />

//           <label>
//             This is my drop down box:
//             <select onChange={this.EventHandler} name="color">
//               <option value="Blue">Blue</option>
//               <option value="Red">Red</option>
//               <option value="Yellow">Yellow</option>
//               <option value="Orange">Orange</option>
//               <option value="Pink">Pink</option>
//             </select>
//           </label>

//           <br />
//           <br />

//           <input type="Submit" />

//         </form>
//         <h1>
//           {this.state.firstName} {this.state.lastName}
//           You are a {this.state.gender}
//           <br />
//           Your have selected {this.state.color} colour
//         </h1>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));

//-------------------------------------------------------------------------------------------------------------------

// Task 27 ( Forms Practice Important )

// import React from "react";
// import ReactDOM from "react-dom";
// import "./style.css";
// class App extends React.Component {

//   constructor() {

//     super();

//     this.state = {
//       firstName: "",
//       lastName: "",
//       Age: "",
//       Gender: "",
//       Destination: "",
//       Vegan: false,
//       Kosher: false,
//       LactoseFree: false,
//     };
//     this.handle = this.handle.bind(this);
//   }
//   handle(event){
//     const {name, value, type, checked} = event.target;
//     type === "checked" ?
//     this.setState({
//       [name]:checked
//     })
//     :
//     this.setState({
//       [name]:value
//     })
//   }

//   render() {

//     return (
//       <div>
//         <h1>Fill the Form</h1>
//         <form>
//           First Name:&nbsp;
//           <input type="text" placeholder="First Name" name="firstName" onChange = {this.handle}/>
//           <br /><br />

//           Last Name:&nbsp;
//           <input type="text" placeholder="Last Name" name="lastName" onChange = {this.handle}/>
//           <br /><br />

//           Age:&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
//           <input type="number" placeholder="Age" name="Age" onChange = {this.handle}/>
//           <br /><br />

//           <label>
//           Male
//           <input
//             type="radio"
//             name="Gender"
//             value="Male"
//             checked={this.state.Gender === "Male"}
//             onChange = {this.handle}
//           />
//           </label>

//           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

//           <label>
//           Female
//           <input
//             type="radio"
//             name="Gender"
//             value="Female"
//             checked={this.state.Gender === "Female"}
//             onChange = {this.handle}
//           />
//           </label>

//           <br/><br/>

//           Destination: &nbsp;
//           <select name = "Destination" onChange = {this.handle}>
//             <option value = "None">Select Destination</option>
//             <option value = "Colombo">Colombo</option>
//             <option value = "Kandy">Kandy</option>
//             <option value = "Galle">Galle</option>
//             <option value = "Jaffna">Jaffna</option>
//           </select>
//         </form>

//         Dietary (At least Teo):<br/> <br/>
//         &nbsp;&nbsp;&nbsp;&nbsp;<label>Vegan:        <input type = "checkbox" name = "Vegan" value = "Vegan" checked={this.state.Vegan} onChange = {this.handle} /></label> <br/> <br/>
//         &nbsp;&nbsp;&nbsp;&nbsp;<label>Kosher:       <input type = "checkbox" name = "Kosher" value = "Kosher" checked={this.state.Kosher} onChange = {this.handle}/></label> <br/> <br/>
//         &nbsp;&nbsp;&nbsp;&nbsp;<label>Lactose Free: <input type = "checkbox" name = "LactoseFree" value = "LactoseFree" checked={this.state.LactoseFree} onChange = {this.handle} /></label><br/> <br/>

//       <hr />
//         <div>
//           <h1>Entered Information</h1>

//             <p>Name: {this.state.firstName} {this.state.lastName} </p>

//             <p>Age: {this.state.Age}</p>

//             <p>Gender: {this.state.Gender}</p>

//             <p>Destination: {this.state.Destination}</p>

//             <p> Dietary: {this.state.Vegan && "Vegan,"} {this.state.Kosher && "Kosher,"} {this.state.LactoseFree && "LactoseFree."} </p>

//         </div>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<App />, document.getElementById("root"));

//-------------------------------------------------------------------------------------------------------------------

