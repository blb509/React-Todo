import React from 'react';
import Todo from './Todo';


const TodoList = props => {
    return props.tasks.map(task=> <Todo task={task} key={task.id} strike={props.strike}/>)
}

export default TodoList;