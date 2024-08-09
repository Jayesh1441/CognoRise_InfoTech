import React from 'react'
import "./App.css";
import CurrencyConvertor from './components/CurrencyConvertor';
function App() {
  return (
    <div>

        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
          <CurrencyConvertor/>
        </div>
      
    </div>
  )
}

export default App