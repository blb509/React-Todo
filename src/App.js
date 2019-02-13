import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: [],
      task: ""
    };
  }

  addTodo = e => {
    e.preventDefault();
    const tasks = this.state.tasks;
    tasks.push(this.state.task);
    this.setState({tasks, task:""});
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList />
        <TodoForm
          value={this.state.todo}
          onSubmit={this.addTodo}
          handleChanges={this.handleChanges}
        />
      </div>
    );
  }
}

export default App;
