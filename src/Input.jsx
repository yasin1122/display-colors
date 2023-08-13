const Input = ({ color, setColor }) => {
  return (
    <input
      className='color-input'
      type='text'
      placeholder={color}
      onChange={e => setColor(e.target.value)}
    />
  )
}

export default Input
