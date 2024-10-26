import ShopCard from './ShopCard';

export default function CardsView(props) {
    return(
        props.cards.map((item, index) => {
            return <ShopCard item={{item: item, index: index}}/>
        })
    )
}