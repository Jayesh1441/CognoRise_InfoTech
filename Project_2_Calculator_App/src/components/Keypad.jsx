import React from 'react'
import './Keypad.css'

function Keypad({handleKeyPress}) {
  const keys = [
    { keyCode: 103, label: '7', value: '7' },
    { keyCode: 104, label: '8', value: '8' },
    { keyCode: 105, label: '9', value: '9' },
    { keyCode: 100, label: '4', value: '4' },
    { keyCode: 101, label: '5', value: '5' },
    { keyCode: 102, label: '6', value: '6' },
    { keyCode: 97, label: '1', value: '1' },
    { keyCode: 98, label: '2', value: '2' },
    { keyCode: 99, label: '3', value: '3' },
    { keyCode: 96, label: '0', value: '0' },
    { keyCode: 110, label: '.', value: '.' },
    { keyCode: 13, label: '=', value: '=' },

  ];

  const symbols = [
    { keyCode: 8, label: 'C', value: 'Backspace' },
    { keyCode: 111, label: '÷', value: '/' },
    { keyCode: 106, label: '×', value: '*' },
    { keyCode: 107, label: '+', value: '+' },
    { keyCode: 109, label: '-', value: '-' },
  ]

  return (
    <div className='keypad'>
      <div className="keypad_keys">
        {
          keys.map((item, index) => <p onClick={() => handleKeyPress(item.keyCode, item.label)} key={index}>{item.label}</p>)
        }
      </div>
      <div className="keypad_symbols">
        {
          symbols.map((item, index) => <p onClick={() => handleKeyPress(item.keyCode, item.value)} key={index}>{item.label}</p>)
        }
      </div>
    </div>
  )
}

export default Keypad