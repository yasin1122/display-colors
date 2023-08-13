import { useState } from 'react'
import Square from './Square'
import Input from './Input'
import Header from './Header'

function App() {
  const [color, setColor] = useState('white')

  return (
    <>
      <Header />
      <Square color={color} />
      <Input
        color={color}
        setColor={setColor}
      />
    </>
  )
}

export default App
