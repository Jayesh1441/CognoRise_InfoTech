import React  from 'react'
import { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';
import TodoIcon from "./assets/direct-hit.png"
import DoingIcon from "./assets/glowing-star.png"
import DoneIcon from "./assets/check-mark-button.png"

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);


function App() {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || [])
   useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
   }, [tasks])
  

  const handleDelete = (taskIndex) => {
   const newTasks = tasks.filter((task, index) => index !== taskIndex)
   setTasks(newTasks)
  }
  
  return (
    <div className='app'>
      <TaskForm setTasks = {setTasks} />
      <main className="app_main">
        <TaskColumn heading="To do" icon={TodoIcon} tasks = {tasks} status = "todo" handleDelete={handleDelete} />
        <TaskColumn heading="Doing" icon={DoingIcon} tasks = {tasks} status = "doing" handleDelete={handleDelete} />
        <TaskColumn heading="Done" icon={DoneIcon} tasks = {tasks} status = "done" handleDelete={handleDelete} />
      </main>
    </div>
  )
}

export default App