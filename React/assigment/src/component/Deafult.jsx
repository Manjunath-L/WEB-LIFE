import React from 'react'

function Deafult ({name = "Default Name"}) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  )
}

export default  Deafult

