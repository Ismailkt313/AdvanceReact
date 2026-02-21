import React, { useState } from 'react'


export const useCounter = () => {
    const [count, setCount] = useState(0)
    const inc = () => { setCount((a) => a + 1) }
    const dec = () => { setCount((a) => a - 1) }
    return {inc,dec,count}
}