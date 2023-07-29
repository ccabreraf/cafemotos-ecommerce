import ItemCount from './ItemCount';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useCartContext from './CartContext';

// function onAdd(count) {    
    
//     setIsInCart(true);
//     addToCart(detalle, count);
    
// }
export const ItemDetail = ({ repuestos }) => {
    return (
        <>
            <div>Id:{repuestos.id}</div>
            <div>Nombre: {repuestos.nombre}</div>
            <div>Categoria: {repuestos.categoria}</div>
            <img src={repuestos.img} alt={repuestos.nombre} height={'230vh'}/>
            <div>Descripción: {repuestos.detail}</div>
            <div>Precio: ${repuestos.price}</div>
            <ItemCount stock={repuestos.stock} initial={1} itemName={repuestos.nombre} />
        </>
    )
}

/* <ItemCount onAdd={onAdd} stock={repuestos.stock} initial={1} itemName={repuestos.nombre} /> */
// function ItemDetail({  repuestos } ) {

//     const [isInCart, setIsInCart] = useState(false);
//     const { addToCart, estaEnCarrito } = useCartContext();
//     const { getItemQuantity } = useCartContext();
//     function onAdd(count) {    
    
//     setIsInCart(true);
//     addToCart(repuestos, count);
    
//     }

//     return (
//         <>
//             <div>Id:{repuestos.id}</div>
//             <div>Nombre: {repuestos.nombre}</div>
//             <div>Categoria: {repuestos.categoria}</div>
//             <img src={repuestos.img} alt={repuestos.nombre} height={'230vh'}/>
//             <div>Descripción: {repuestos.detail}</div>
//             <div>Precio: ${repuestos.price}</div>
//             <ItemCount onAdd={onAdd} stock={repuestos.stock} initial={1} itemName={repuestos.nombre} />
//         </>
//     )
// }

export default ItemDetail