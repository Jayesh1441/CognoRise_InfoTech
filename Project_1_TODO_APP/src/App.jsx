import React from 'react'
import './App.css';
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';
import TodoIcon from "./assets/direct-hit.png"
import DoingIcon from "./assets/glowing-star.png"
import DoneIcon from "./assets/check-mark-button.png"

function App() {
  return (
    <div className='app'>
      <TaskForm/>
      <main className="app_main">
        <TaskColumn heading = "To Do"  icon = {TodoIcon}/>
        <TaskColumn heading = "Doing" icon = {DoingIcon}/>
        <TaskColumn heading = "Done" icon = {DoneIcon}/>
      </main>
    </div>
  )
}

export default App