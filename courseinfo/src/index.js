import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	const course = {
	name: 'Half Stack application development',
	parts : [ 
	{
	  name: 'Fundamentals of React',
	  exercises: 10
	},
	 {
	  name: 'Using props to pass data',
	  exercises: 7
	},
	{
	  name: 'State of a component',
	  exercises: 14
	  
		}
	]
}
  return (
    <div>
      
      <Header course={course.name}/>
      <Content parts ={course.parts}/>
      <Total parts = {course.parts}/>

    </div>
  )
}

const Header=(props) =>{
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Total = () => {
	var num = 0
	
	for (var i = 0; i < PartLists.length; i++) {
		num = num + PartLists[i].exercises
	}
	
	return (
		<div>
			<p>Number of exercises: {num}</p>
		</div>
	)
};

const Part = (props) => {
	return (
		<div>
			<p>
				{props.part}: {props.exercises}
			</p>
		</div>
	)
};


const PartLists = [
	{
		id: 1,
		part: 'Fundamentals of React',
		exercises: 10
	},
	{
		id: 2,
		part: 'Using props to pass data',
		exercises: 7
	},
	{
		id: 3,
		part: 'State of a component',
		exercises: 14
	}
];

const Content = () => {
	const lists = PartLists.map(
		function(list) {
			return (
				<div>
					<Part part={list.part} exercises={list.exercises} />
				</div>
			)
		})
	
	return lists
};


ReactDOM.render(
    <App />,  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
