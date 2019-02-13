import React from 'react';

const TodoForm = props => {
  return (
    <form onSubmit={props.addTodo}>
      <input
        type="text"
        value={props.task}
        name="todo"
        onChange={props.handleChanges}
        placeholder="...todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
