import React from 'react'

const TodoForm = props => {
    return (
        <div>
            <input 
                type="text"
                name="task"
                value={props.task}
                onChange={props.handleChange}
            />
            <button onClick={props.addTodo}>Add Task</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    );
}

export default TodoForm