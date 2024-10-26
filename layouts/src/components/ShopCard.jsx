export default function CardsView(props) {
    return(
        <div className="card" key={props.item.item.index}>
           <img className="imgCard" src={props.item.item.img}/>
           <h1 className="nameCard">{props.item.item.name}</h1>
           <h4 className="propertyCard">{props.item.item.color}</h4>
           <div className="priceCard">{`$${props.item.item.price}`}</div>
           <button className="addToCart">ADD TO CARD</button>
        </div>
    )
}