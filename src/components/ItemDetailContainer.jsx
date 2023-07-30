import { useState, useEffect } from "react"
import {useParams } from "react-router-dom"
import Container from "react-bootstrap/Container"
import data from "../data/products.json"
import ItemDetail from "./ItemDetail.jsx"


export const ItemDetailContainer = props => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve, rejected) => {
            setTimeout(() => {
                resolve(data)
            }, 2000)
            
        })
        promesa.then(result => {
            setProduct(result[id - 1])
        })
    }, [id])
    return ( 
        <Container className='mt-4'>
            <h1>Detalle</h1>
            {product.length === 0 ? (<div>Cargando ...</div>) : (<ItemDetail repuestos={product} />)}
        </Container>
    )
}