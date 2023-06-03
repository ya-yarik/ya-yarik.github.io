import React from 'react'
import Hoc from './hoc/Hoc'

const Component = (props) => {
  
  const onChangeInput = (inputValue)=>{
    props.inputChange(inputValue.target.value)
  }

  return (
    <div>
      <p>
        {props.text}
      </p>
      <input onChange={onChangeInput} type="text">
      </input>
    </div>
  )
}

export default Hoc(Component)