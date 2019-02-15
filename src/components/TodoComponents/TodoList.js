import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    console.log(props, 'TodoList');
    return props.todos.map(todo => <Todo 
                                        todo={todo} 
                                        key={todo.id} 
                                        class={todo.class} 
                                        toggleCompleted={props.toggleCompleted} 
                                    />)
}

export default TodoList