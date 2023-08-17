import { Item } from "./Item.jsx";
import { Container } from 'react-bootstrap';
import React from 'react';

export function ItemList({ items }) {

    return (
        <>
        { items.map(thisitem => {
            return (
                <Container key={thisitem.id}>
                <Item img={thisitem.img} category={thisitem.category} stock={thisitem.stock} item={thisitem.id} nombre={thisitem.nombre} detail={thisitem.detail} price={thisitem.price}/>
                </Container>
            )
        })}
    </>
    )
}

// export const ItemList = ({ products }) => 
//     products.map(repuestos => <Item key={repuestos.id} repuestos={repuestos} />)


