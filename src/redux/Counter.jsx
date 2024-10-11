import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice.js'

export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          style={{ backgroundColor: 'lightgreen', padding: '10px', borderRadius: '5px', marginRight: '10px' }}
        >
          Increment
        </button>
        <span style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 15px' }}>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          style={{ backgroundColor: 'lightcoral', padding: '10px', borderRadius: '5px' }}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
