export function Toolbar(props) {
  return (
    <div className="toolbar">
      <button onClick={props.onSelectFilter}>All</button>
      <button >Website</button>
      <button >Flayers</button>
      <button >Business Cards</button>
    </div>
  )
}