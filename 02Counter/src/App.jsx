import { useState } from 'react'

import './App.css'

function App() {
  
  let counter = 18 

  const addValue = () => {
    counter = counter + 1
  }

  return (
    <>
      <h1> React- Counter </h1>
      <h2> Counter Value : {counter} </h2>

      <button
      onClick = {addValue}
      > Add Value </button>
      <br />
      <button> Remove Value </button>

    </>
  )
}

export default App
