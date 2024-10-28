export default function IconSwitch(props) {
    return (
        <button onClick={props.onSwitch}><i className='material-icons'>{props.icon}</i></button>
    )
}