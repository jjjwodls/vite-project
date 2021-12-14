import React, { useState } from 'react'
import { Header } from './App2'
import Test from '@components/Test';
import logo from './logo.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Header>
      <Test></Test>
      
    </Header>
  )
}

export default App;