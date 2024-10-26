import ShopCard from './ShopCard';

export default function ListView(props) {
    return(
        props.items.map((item, index) => {
            return <ShopCard item={{item: item, index: index}}/>
        })
    )
}