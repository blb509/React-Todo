import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      todo: ""
    };
  }

  handleChanges = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  addTask = e => {
    e.preventDefault();
    const newTasks = [...this.state.tasks]
    newTasks.push({task: this.state.todo, id: Date.now(), completed: false})
    this.setState({tasks: newTasks, todo:""})
  };

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList tasks= {this.state.tasks} />
        <TodoForm task={this.state.todo} 
        handleChanges = {this.handleChanges}
        addTask = {this.addTask}/>
      </div>
    );
  }
}

export default App;
