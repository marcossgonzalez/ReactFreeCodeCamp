import logo from './logo.svg';
import './App.css';
import React from 'react';



//const jsx= <div></div>;

//Para colocar comentários dentro do JSX, você usa a sintaxe {/* */} para definir contexto do texto do comentário, 
//como demonstrado abaixo.
//const JSX = (
  //<div>
    //<h1>This is a block of JSX</h1>
    //<p>Here's a subtitle</p>
    //{/*<h2>Hello</h2>*/}
  //</div>
//);
/*
Uma diferença importante no JSX é que você não pode mais usar a palavra class para definir classes HTML. 
Isso ocorre porque class é uma palavra reservada em JavaScript. Em vez disso, JSX usa className.*/
//const JSX = (
  //<div className="myDiv">
    //<h1>Add a class to this div</h1>
  //</div>
//);
//const JSX = (
  //<div>
    //<h2>Welcome to React!</h2> <br></br>
    //<p>Be sure to close all tags!</p>
    //<hr></hr>
  //</div>
//);

//const MyComponent = function() {
  // Change code below this line
  //return (
    //<div><p>Hello World</p></div>
  //);


  // Change code above this line
//}

/*const JSX = (
  <div id="challenge-node">
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);*/

/*class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line
    return(
      <div><h1>Hello React!</h1></div>
    );


    // Change code above this line
  }
};*/

/*Imagine que você está construindo um aplicativo e criou três componentes: barra de navegação, painel e rodapé.

Para compor esses componentes juntos, você pode criar um componente pai App que renderiza cada um desses três 
componentes como filhos. Para renderizar um componente como filho em um componente React, inclua o nome do 
componente escrito como uma tag HTML personalizada no JSX. Por exemplo, no método render você poderia escrever:
return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
)
*/

/*
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ //}
        //{/*<ChildComponent/>*}

        //{ /* Change code above this line */ //}
      //</div>
    //);
  //}
//};*/

//-------------------------------------------------
/*const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};*/

/*const Fruits = () => {
  return (
    <div>
      { /* Change code below this line */ //}
      //<TypesOfFruit/>
      //{ /* Change code above this line */ }
    //</div>
  //);
//};*/

/*class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ //}
        //<Fruits/>
        //{ /* Change code above this line */ }
      //</div>
    //);
  //}
//};*/
//class Fruits extends React.Component {
  //constructor(props) {
    //super(props);
  //}
  //render() {
    //return (
      //<div>
        //<h2>Fruits:</h2>
        //{ /* Change code below this line */ }
          //<NonCitrus />
          //<Citrus />
        //{ /* Change code above this line */ }
      //</div>
    //);
 // }
//};
//
//class TypesOfFood extends React.Component {
  //constructor(props) {
     //super(props);
  //}
  //render() {
    //return (
      //<div>
        //<h1>Types of Food:</h1>
        //{ /* Change code below this line */ }
        //<Fruits/>
        //{ /* Change code above this line */ }
        //<Vegetables />
      //</div>
    //);
  //}
//};
//-------------------------------------------------------
/*class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='challenge-node'>
        <h1>Types of Food:</h1>
        {/* Change code below this line *///}
          //<Fruits/>
          //<Vegetables/>
        //{/* Change code above this line */}
      //</div>
    //);
  //}
//  
//};*/

// Change code below this line
//ReactDOM.render(<TypesOfFood/>, document.getElementById("challenge-node"));

class MyComponent extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id="challenge-node">
        <h1>My First React Component!</h1>
      </div>
    )
  }
}
//ReactDOM.render(<MyComponent/>, document.getElementById("challenge-node"));
function App() {
  
  return (
    <div></div>
    //JSX
    //<div></div>
    //JSX
    
    //<div className="App">
      
        
      //{/*//<jsx><h1>oi</h1>
    //<p></p>
  //<ul>
  //<li>a</li>
  //<li>b</li>
  //<li>c</li>
  //</ul></jsx>*/}
    //</div>
    
  );
  
}
//export default App;
export default MyComponent;
//export default ParentComponent;
//export default TypesOfFood;