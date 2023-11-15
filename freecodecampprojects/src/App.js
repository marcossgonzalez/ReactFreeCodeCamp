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

class MyComponent extends React.Component {
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
};


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
