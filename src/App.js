import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import "./components/TodoComponents/Todo.css"



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{
        task: '', 
        id: Date.now(), 
        completed: false,  
      }
      ],
      task: '',
    };
  }

  addTodo = () => {
    const newTodos = [...this.state.todos]
    newTodos.push({
      task: this.state.task, 
      id: Date.now(), 
      completed: false 
    })
    this.setState({todos: newTodos, task: ''})
  }

  handleChange = event => {
    this.setState({task: event.target.value})
  }

  toggleCompleted = id => {
    const newTodos = [...this.state.todos]
    newTodos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
        return todo
      }
      return todo
    })
    this.setState({todos: newTodos})
  }

  clearCompleted = e => {
    e.preventDefault();
    let todoListCopy = this.state.todos.slice();
    todoListCopy = todoListCopy.filter(todo => !todo.completed);
    this.setState({todos: todoListCopy});
  }

  render() {
    return (
      <div>
        <h1>Todo List:</h1>
        <TodoList 
          todos={this.state.todos} 
          toggleCompleted={this.toggleCompleted} 
        />
        <TodoForm
          addTodo={this.addTodo}
          task={this.state.task}
          handleChange = {this.handleChange}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
