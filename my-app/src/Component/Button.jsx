function Button([label, onPress]) {
  return (
    <button className="btn" onClick={() => onPress(label)}>
        {label}
    </button>
  )
}

export default Button