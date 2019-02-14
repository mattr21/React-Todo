import React from 'react'
import Todo from './Todo'

//Step 5: build out your TodoList component
const TodoList = props => {
    // Step 6: map over the todos array in state
    // Step 7: in the map function we are referencing a new component, Todo, and passing in the todo task and the unique key as properties
    return props.todos.map(todo => <Todo todo={todo} key={todo.id} somethingElse={"something else"} />)
}

export default TodoList