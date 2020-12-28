import React from 'react';
import ReactDOM from 'react-dom';

const App=() =>{
  const course = 'Half Stack Application development'
  const part1 = 'Fundamentals of React '
  const excercises1 = 10
  const part2 = 'Using props to pass data '
  const excercises2 = 7
  const part3 = 'State of a component '
  const excercises3 = 14
const totals = excercises1+excercises2+excercises3


  return (
    <div>
      
      <Header course={course}/>
      {/*<Content part1= {part1} excercises1={excercises1} />
      <Content part2= {part2} excercises2={excercises2} />
      <Content part3= {part3} excercises3={excercises3} />*/}

      <Content1/>
      {/*<Totals/>*/}

      <Total totals={totals}/>
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

const Content=(props) =>{
    
      
  return (
 
 <div>
   {/*<p> {props.part1}{props.excercises1}</p>
        <p> {props.part2}{props.excercises2}</p>
        <p> {props.part3}{props.excercises3}</p>*/}

    <Part part={props.part1} excerise={props.excercises1}/>
    <Part part={props.part2} excerise={props.excercises2}/>
    <Part part={props.part3} excerise={props.excercises3}/>
    </div>
  )
}

const Total=(props) =>{

  return (
    <div>
      <p>Number of excercises {props.totals}</p>
    </div>
  )
}

const Totals = () => {
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

const Content1 = () => {
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
