export default function CardsView(props) {
    return(
        <div className="card" key={props.item.item.index}>
            <p className="nameCard">{props.item.item.name}</p>
            <p className="propertyCard">{props.item.item.color}</p>
            <img className="imgCard" src={props.item.item.img}/>
            <div className="priseAddToCart">
                <p className="priceCard">{`$${props.item.item.price}`}</p>
                <button className="addToCart">ADD TO CARD</button>
            </div>
        </div>
    )
}