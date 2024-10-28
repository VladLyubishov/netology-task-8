export default function IconSwitch(props) {
    return (
        <button onClick={props.onSwitch} className="buttonSwitch"><i className="material-icons icon">{props.icon}</i></button>
    )
}