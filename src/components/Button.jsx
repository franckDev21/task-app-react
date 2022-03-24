const Button = ({children,onClick,color}) => {
  return <button style={{backgroundColor: color}} className="btn" onClick={onClick}>{children}</button>
}

export default Button