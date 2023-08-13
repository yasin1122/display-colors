const Input = ({ color, handleColorChange }) => {
  return (
    <input
      className='color-input'
      type='text'
      placeholder={color}
      onChange={handleColorChange}
    />
  )
}

export default Input
