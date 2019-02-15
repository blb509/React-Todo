import React from 'react';


const TodoForm = props => {
  return (
    <form>
      <input
        type="text"
        value={props.task}
        name="todo"
        onChange={props.handleChanges}
        placeholder="...todo"
      />
      <button onClick={props.addTask}>Add Todo</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
