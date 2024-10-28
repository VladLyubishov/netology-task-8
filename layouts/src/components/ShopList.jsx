export default function ListView(props) {
    return(
        <div className="list" key={props.item.item.index}>
           <img className="imgCard" src={props.item.item.img}/>
           <p className="nameCard">{props.item.item.name}</p>
           <p className="propertyCard">{props.item.item.color}</p>
           <div className="priceCard">{`$${props.item.item.price}`}</div>
           <button className="addToCart">ADD TO CARD</button>
        </div>
    )
}