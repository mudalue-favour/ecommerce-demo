import React from 'react'
// import { Link } from 'react-router-dom'

function Button({ width, padding, text, color, size, background }) {
  return (
    <>
      <button
        className={`btn  btn-${size} btn-${color}`}
        style={{
          width: { width },
          padding: { padding },
          color: { color },
          background: { background },
        }}
      >
        {text}
      </button>
    </>
  )
}

export default Button
