import React from 'react';
import './Todo.css'

const Todo = props => {
  return <div className = {props.task.completed ? "strike" : null} 
          onClick = { () => props.strike(props.task.id)}> {props.task.task} </div>
}

export default Todo;