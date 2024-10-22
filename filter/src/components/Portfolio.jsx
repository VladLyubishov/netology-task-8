import { Toolbar } from "./Toolbar";


export function Portfolio (){
return (
    <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected="All"
        onSelectFilter={(filter) => {console.log(filter);}}
    />
    )
}