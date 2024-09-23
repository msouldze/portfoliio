function Button({ children, type }) {
  return (
    <button className={type}>
      {children}
    </button>
  )
}

export default Button;