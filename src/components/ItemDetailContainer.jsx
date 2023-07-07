import { useState, useEffect } from "react"
//import {useParams } from "react-router-dom"
import Container from "react-bootstrap/Container"

import data from "../data/products.json"
import {ItemDetail } from "../components/ItemDetail.jsx"


export const ItemDetailContainer = props => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const promesa = new Promise((resolve, rejected) => {
            setTimeout(() => {
                resolve(data)
            }, 2000)
            
        })

        promesa.then(result => {
            setProduct(result[2])
        })
    }, [])

    return ( 
        <Container className='mt-4'>
            <h1>Detalle</h1>
            {product.length === 0 ? (<div>Cargando ...</div>) : (<ItemDetail repuestos={product} />)}
        </Container>
    )
}