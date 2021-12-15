import React, { useState } from 'react';
import { Header } from './App2';
import Test from '@components/Test';

function App() {
  const [count, setCount] = useState(0);
  const foo = 'tt';
  return (
    <Header>
      <Test></Test>
    </Header>
  );
}

export default App;
