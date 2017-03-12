import React from "react";

import TodoItem from "./TodoItem";

class TodoList extends React.Component {
	render(){
		const items = [
			{name: 'Item One', done: true}, 
			{name: 'Item two', done: false},
			{name: 'Item Three', done: true},
			{name: 'Item Four', done:false}
		];
		return (
			<ul>
				{items.map(function(item) {
					return <TodoItem name = {item.name} done = {item.done}/>;
				})}
				{/*This is an arrow function equivalent doing same thing
					{items.map(item => <TodoItem name= {item.name} done={item.done}/>)}
				*/}
			</ul>
			);
	}
}

export default TodoList;