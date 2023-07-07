import { Item } from "../components/Item"

export const ItemList = ({ products }) => 
    products.map(repuestos => <Item key={repuestos.id} repuestos={repuestos} />)


