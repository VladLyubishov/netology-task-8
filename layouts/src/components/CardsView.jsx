import ShopCard from './ShopCard';

export default function CardsView(props) {
    return(
        props.props.card.map(item => {
            return <ShopCard props={item}/>
        })
    )
}