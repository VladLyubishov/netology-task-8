export default function ListView(props) {
    return(
        <div className="list" key={props.item.item.index}>
           <img className="imgList" src={props.item.item.img}/>
           <h1 className="nameList">{props.item.item.name}</h1>
           <h4 className="propertyList">{props.item.item.color}</h4>
           <div className="priceList">{`$${props.item.item.price}`}</div>
           <button className="addToCartList">ADD TO CARD</button>
        </div>
    )
}