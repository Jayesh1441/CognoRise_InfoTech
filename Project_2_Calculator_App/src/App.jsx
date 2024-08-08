import { useState } from 'react'
import './App.css'
import nightIcone from './assets/night-mode.png'
import dayIcone from './assets/mode.png'
import Display from './components/Display'
import Keypad from './components/Keypad'


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className="app" data-theme={ isDarkMode ?  "dark" : " "}>
      <div className="app_calculator">
        <div className="calculator_navbar">
          <div className="navbar_toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
            <div className={`toggle_circle ${isDarkMode ? "toggle_circle_active" : ""}` }></div>
          </div>
          <img src={isDarkMode ? nightIcone : dayIcone} alt="" />
        </div>
        <Display/>
        <Keypad/>
      </div>
    </div>
  )
}

export default App
