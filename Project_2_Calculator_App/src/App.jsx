import { useEffect, useState } from 'react'
import './App.css'
import nightIcone from './assets/night-mode.png'
import dayIcone from './assets/mode.png'
import Display from './components/Display'
import Keypad from './components/Keypad'

const usedKeyCodes = [
  96, 97, 98, 99, 100, 101, 102, 103, 104, 105,  // Numpad numbers
  48, 49, 50, 51, 52, 53, 54, 55, 56, 57,        // Top row numbers
  111, 106, 109, 107, 110, 13, 8                   // Numpad operations and Enter
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const operators = ["-", "+", "*", "/"]

function App() {

  const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem("app_mode")) || false)
  const [expression, setExpression] = useState("")
  const [result, setResult] = useState("")
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem("app_history")) ||[])


  const handleKeyPress = (keyCode, key) => {

    if (!keyCode) return
    if (!usedKeyCodes.includes(keyCode)) return

    if (numbers.includes(key)) {
      if (key === "0") {
        if (expression.length === 0) return
      }
      calculateResult(expression + key)
      setExpression(expression + key)

    }
    else if (operators.includes(key)) {
      if (!expression) return
      const lastChar = expression.slice(-1)
      if (operators.includes(lastChar)) return
      if (lastChar === ".") return
      setExpression(expression + key)

    }
    else if (keyCode === 110) {
      if (!expression) return
      const lastChar = expression.slice(-1)
      if (!numbers.includes(lastChar)) return
      if(lastChar === ".") return
      setExpression(expression + ".")
      console.log(".");
    }
    else if (keyCode === 8) {
      if (!expression) return
      setExpression(expression.slice(0, -1))
      calculateResult(expression.slice(0,-1))
      console.log("Backspace");
    }
    else if (keyCode === 13) {
      if(!expression) return
      calculateResult(expression)
    
      let tempHistory = [...history];
      if(tempHistory.length > 15) tempHistory = tempHistory.slice(0, 1);
      tempHistory.push(expression)
      setHistory(tempHistory)
    }
  };

  const calculateResult = (exp) => {
    if(!exp) {
      setResult("")
      return};
    const lastChar = exp.slice(-1)
    if(!numbers.includes(lastChar))exp=exp.slice(0, -1)
      const answer = eval(exp).toFixed(2) + "";
    setResult(answer)
  }

  useEffect(()=>{
    localStorage.setItem("app_mode", JSON.stringify(isDarkMode))
  }, [isDarkMode])
  useEffect(()=>{
    localStorage.setItem("app_history", JSON.stringify(history))
  }, [history])

  return (
    <div className="app" tabIndex={0} onKeyDown={(e) => handleKeyPress(e.keyCode, e.key)} data-theme={isDarkMode ? "dark" : " "}>
      <div className="app_calculator">
        <div className="calculator_navbar">
          <div className="navbar_toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
            <div className={`toggle_circle ${isDarkMode ? "toggle_circle_active" : ""}`}></div>
          </div>
          <img src={isDarkMode ? nightIcone : dayIcone} alt="" />
        </div>
        <Display expression={expression} result={result} history={history} />
        <Keypad handleKeyPress={handleKeyPress} />
      </div>
    </div>
  )
}

export default App
