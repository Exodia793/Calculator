function Display({rumus, hasil}) {
  return (
    <div className="display">
        <div className="rumus">{rumus || "0"}</div>
        <div className="hasil">{hasil}</div>
    </div>
  )
}

export default Display