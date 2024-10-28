import ShopList from './ShopList';

export default function ListView(props) {
    return(
        props.items.map((item, index) => {
            return <ShopList item={{item: item, index: index}}/>
        })
    )
}