const Square = ({ color }) => {
  return (
    <div
      className='color-box'
      style={{ backgroundColor: color }}>
      <p className='color-box-p'>{color}</p>
    </div>
  )
}

export default Square
