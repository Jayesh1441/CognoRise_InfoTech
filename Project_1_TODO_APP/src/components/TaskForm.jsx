import React from 'react'

import "./TaskForm.css"

function TaskForm() {
    return (
        <div>
            <header className='app_header'>
                <form action="#">
                    <input type="text" className="task_input" placeholder="Enter a task" />
                    <div className='task_btm_line'>
                    <div>
                        <button className="tag">HTML</button>
                        <button className="tag">CSS</button>
                        <button className="tag">JAVASCRIPT</button>
                        <button className="tag">REACT</button>
                        </div>
                        <div>
                        <select className="task_status">
                            <option value="todo">To Do</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>

                        <button type='submit' className='task_submit'>+ Add Task</button>
                        </div>
                    </div>
                </form>
            </header>
        </div>
    )
}

export default TaskForm