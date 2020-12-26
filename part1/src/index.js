import React from 'react';
import ReactDOM from 'react-dom';

const Hello =(props)=>{
  return(
    <div>
      <p>Hello world {props.name} you are {props.age} years old</p>
    </div>
  )
}


const App=()=>{
  //console.log('Hello from component')
const now = new Date()
const a = 10
const b = 20
const name = "Maya "
const age = "18"

  return(
  <div>
    <h1>Hello world, it is {now.toString()}</h1>
    <Hello/>
    <Hello name = "Mehdi " age = {26+10}/>
    <Hello name = {name} age={age}/>
    <p>
      {a} plus {b} is {a+b}
    </p>
    <Hello/>
    </div>
)
}
ReactDOM.render(<App />,  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
