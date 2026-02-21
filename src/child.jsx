import React from 'react'
import { useCounter } from "./child2"

const child = () => {
  const {inc,dec,count}=useCounter()
  return (
    <div>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <h4>{count}</h4>
    </div>
  )
}

export default child
