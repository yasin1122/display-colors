import { useState } from 'react'
import Square from './Square'
import Input from './Input'

function App() {
  const [color, setColor] = useState('white')

  const handleColorChange = e => {
    setColor(e.target.value)
  }

  return (
    <>
      <h1>Display Colors</h1>
      <Square color={color} />
      <Input
        color={color}
        handleColorChange={handleColorChange}
      />
    </>
  )
}

export default App
