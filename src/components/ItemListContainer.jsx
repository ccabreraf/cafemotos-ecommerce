import { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"

import data from "../data/products.json"
import {ItemList } from "../components/itemList"


export const ItemListContainer = props => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const promesa = new Promise((resolve, rejected) => {
            setTimeout(() => {
                resolve(data)
            }, 2000)
            
        })

        promesa.then(result => setProducts(result))
    }, [])

    return ( 
        <Container className='mt-4'>
            <h1>{props.greetings}</h1>
            {products.length === 0 ? (<div>Cargando ...</div>) : (<ItemList products={products} />)}
        </Container>
    )
}