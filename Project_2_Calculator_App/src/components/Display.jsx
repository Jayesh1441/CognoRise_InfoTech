import React, { useRef, useEffect } from 'react'
import "./Display.css"

function Display({ expression, result, history }) {
  const resultRef = useRef()
  const expressionRef = useRef()

  useEffect(() => {
    resultRef.current.scrollIntoView()
  }, [result])

  useEffect(() => {
    expressionRef.current.scrollLeft = expressionRef.current.scrollWidth
  }, [expression])
  return (
    <div className='display custom_scroll'>
      <div className="display_history ">
        {
          history &&
          history?.map((item, index) => <p key={item +""+ Math.random() *14}>{item}</p>
          )
        }
      </div>
      <div className="border"></div>
      <div ref={expressionRef} className="display_expression custom_scroll"><p>{expression}</p></div>
      <div ref={resultRef} className="display_result ">
        <p>{result}</p>
      </div>
    </div>
  )
}

export default Display