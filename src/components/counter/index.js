import React, { useEffect, useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(10)

  useEffect(() => {
    document.title = counter
  })

  return (
    <div>
      <p>{counter}</p>
      <div>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
    </div>
  )
}

export default Counter
