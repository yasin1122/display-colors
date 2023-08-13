import { useState } from 'react'

function App() {
  const [color, setColor] = useState('white')

  const handleColorChange = e => {
    setColor(e.target.value)
  }

  return (
    <>
      <h1>Display Colors</h1>
      <div
        className='color-box'
        style={{ backgroundColor: color }}>
        <p className='color-box-p'>{color}</p>
      </div>
      <input
        className='color-input'
        type='text'
        placeholder={color}
        onChange={handleColorChange}
      />
    </>
  )
}

export default App
