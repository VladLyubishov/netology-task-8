export default function Toolbar(props) {
  return (
    <div className="toolbar">
      {props.props.filters.map((item, index) => {
          if(item == props.props.selected){
            return(<button className='selected' key={index} onClick={props.props.onSelectFilter}>{item}{' '}</button>)
          } else {
            return(<button key={index} onClick={props.props.onSelectFilter}>{item}{' '}</button>)
          }
        }
      )}
    </div>
  )
}