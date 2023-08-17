import { useState, useEffect } from "react"
import {useParams } from "react-router-dom"
import Container from "react-bootstrap/Container"
import ItemDetail from "./ItemDetail.jsx"
import { getItem as getProducto } from '../data/firestore.js'


export function ItemDetailContainer( {greeting, items} ) {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    useEffect(() => {
    getProducto(id).then(respuestaPromise => {
        setProduct(respuestaPromise);
    });
    // .catch(errorPromise => {
    //     console.error(errorPromise);
    // });
    }, [id]);

    return ( 
        <Container className='mt-4'>
            <h1>Detalle</h1>
            {product.length === 0 ? (<div>Cargando ...</div>) : (<ItemDetail repuestos={product} />)}
        </Container>
    )
};

// import data from "../data/products.json"
// const ItemDetailContainer = props => {
//     const [product, setProduct] = useState([]);
//     const { id } = useParams();

//     useEffect(() => {
//         const promesa = new Promise((resolve, rejected) => {
//             setTimeout(() => {
//                 resolve(data)
//             }, 2000)
//
//         })
//         promesa.then(result => {
//             setProduct(result[id - 1])
//         })
//     }, [id])
