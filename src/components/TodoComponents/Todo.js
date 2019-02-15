import React from 'react'

const Todo = props =>{
    console.log(props, 'Todo');
    console.log(props.todo);
    
    return (
        <div>
            <h4 className={props.todo.completed ? 'purchased' : ''} onClick={() => props.toggleCompleted(props.todo.id)}>{props.todo.task}</h4>
        </div>
    );
}

export default Todo;