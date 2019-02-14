import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';



class App extends React.Component {
 //Step 1: add constructor with super and this.state
  constructor(props) {
    super(props);
    this.state = {
      //Step 2: add the data we'll need - array of the todos object
      todos: [{
        task: '', 
        id: Date.now(), 
        completed: false}
      ],
    };
  }

  //Step 16: create a method to update the todos array with your new task
  addTodo = () => {
    //Step 17: get a copy of the todos array that's in state
    const newTodos = [...this.state.todos]
    //Step 18: add new todo onto the array
    newTodos.push({
      task: this.state.task, 
      id: Date.now(), 
      completed: false })
    //Step 19: update array in state with the new value
    //Step 24: make it so when the add button is clicked the input box cleares
    this.setState({todos: newTodos, task: ''})
  }

  //Step 13: create a method that can control the input to TodoForm
  handleChange = event => {
    //Step 14: set the state task data to whatever we input

    this.setState({task: event.target.value})
  }

  render() {
    return (
      <div>
        {/* Step 3: use TodoList component */}
        {/* Step 4: add todos as a property */}
        <TodoList todos={this.state.todos} />
        
        {/* Step 11: use TodoForm component */}
       
        <TodoForm
          // Step 20: pass addTodo
          addTodo={this.addTodo}

          // Step 12: pass task as prop on TodoForm component so it had access to it
          task={this.state.task}

          // Step 15: pass handleChange as a prop on TodoForm component so it has access to it
          handleChange = {this.handleChange}
        />
      </div>
    );
  }
}

export default App;
