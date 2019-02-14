import React from 'react'

//Step 10: create a TodoForm component with an input box
const TodoForm = props => {
    return (
        <div>
            {/* Step 22: add type, anme, value, and onChange */}
            <input 
                type="text"
                name="task"
                value={props.task}
                onChange={props.handleChange}
            />

            {/* Step 21: add button to add new task */}
            {/* Step 23: add Todo method on button */}
            <button onClick={props.addTodo}>Add</button> 
        </div>
    );
}

export default TodoForm