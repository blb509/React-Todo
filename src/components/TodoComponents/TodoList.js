import React from 'react';
import Todo from './Todo';


const TodoList = props => {
    return props.tasks.map(tasks => <Todo tasks={tasks} key={tasks.id}/>)
}

export default TodoList;