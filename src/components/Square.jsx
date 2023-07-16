import React from 'react'

export default function Square({ value, handleSquare, position }) {

    return (
        <button className='field' onClick={() => handleSquare(position)}>{value}</button>
  )
}
