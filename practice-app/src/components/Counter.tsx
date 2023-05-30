import React, { useState } from 'react'

interface IProps{
  count: number
}

interface IState{
  count: number
}

let btnStyle={
  margin: "10px",
  padding: "5px",
  outline: "none",
  cursor: "pointer",
  fontWeight: 800
}

function Counter(props: IProps) {
  const [state, setState]= useState<IState>({count:props.count})
  const handleIncrement = ():void =>{
    setState({count: state.count+1})
  }

  const handleDecrement = ():void =>{
    setState({count: state.count-1})
  }

  return (
    <div className='mb-5'>
      <h2>1. Counter: Event handling</h2>
      <div>
        <h2>{state.count}</h2>
        <button style={btnStyle} onClick={handleIncrement}>INC</button>
        <button style={btnStyle} onClick={handleDecrement}>DEC</button>
      </div>
    </div>
  )
}

export default Counter