import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
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

  strike = id => {
    let newTasks = [...this.state.tasks]
    newTasks = newTasks.map(task => {
      if (task.id === id){
        task.completed = !task.completed;
        return task;
      } else {
        return task;
      }
    });
    this.setState({tasks: newTasks})
  };

  clearCompleted = e => {
    e.preventDefault();
    let completedTasks = [...this.state.tasks]
      completedTasks = completedTasks.filter(task => !task.completed);
      this.setState({tasks: completedTasks})
  };

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList tasks= {this.state.tasks}
        strike = {this.strike} />
        <TodoForm task={this.state.todo} 
        handleChanges = {this.handleChanges}
        addTask = {this.addTask}
        clearCompleted = {this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
