import React from 'react'
import Hoc from '..hoc/Hoc'
const Counter = (props) => {
  return (
    <div>
      
      <button onClick={props.countDown}>-</button>
      <span>{props.count}</span>
      <button nClick={props.countUp}>+</button>
    </div>
  )
}

export default Hoc(Counter)