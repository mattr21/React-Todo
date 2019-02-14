import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{
        task: '', 
        id: Date.now(), 
        completed: false}],
    };
  }

  addTodo = () => {
    const newTodos = [...this.state.todos]
    newTodos.push({
      task: this.state.task, 
      id: Date.now(), 
      completed: false })
    this.setState({todos: newTodos, task: ''})
  }

  handleChange = event => {
    this.setState({task: event.target.value})
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
       
        <TodoForm
          addTodo={this.addTodo}
          task={this.state.task}
          handleChange = {this.handleChange}
        />
      </div>
    );
  }
}

export default App;
