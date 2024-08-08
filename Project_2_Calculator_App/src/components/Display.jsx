import React from 'react'
import "./Display.css"

function Display() {
  return (
    <div className='display custom_scroll'>
      <div className="display_history ">
        <p>10+5</p>
        <p>10+5</p>
        <p>10+5</p>
        <p>10+5</p>
        <p>10+5</p>
      </div>
      <div className="border"></div>
      <div className="display_expression custom_scroll"><p>10+10</p></div>
      <div className="display_result ">
        <p>20</p>
      </div>
    </div>
  )
}

export default Display