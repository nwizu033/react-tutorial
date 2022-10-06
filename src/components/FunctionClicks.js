// event handling function type

import React from 'react'

export default function FunctionClicks() {
    function clickHandle() {
        console.log("button function clicked")
    }
  return (
    <div>
        <button onClick={clickHandle}>clickme</button>
    </div>
  )
}

