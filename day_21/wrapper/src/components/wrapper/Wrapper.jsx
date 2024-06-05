
import './wrapper.css'

const Wrapper = ({children, customClass}) => {
  return (
    <div>
      <div className={`wrapper ${customClass}`}>{children}</div>
    </div>
  )
}

export default Wrapper
