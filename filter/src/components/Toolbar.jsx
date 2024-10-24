export default function Toolbar(props) {
  return (
    <div className="toolbar">
      {props.filters.map((item, index) => {
          if(item == props.selected){
            return(<button className='selected' key={index} onClick={props.onSelectFilter}>{item}{' '}</button>)
          } else {
            return(<button key={index} onClick={props.onSelectFilter}>{item}{' '}</button>)
          }
        }
      )}
    </div>
  )
}