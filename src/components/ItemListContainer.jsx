import { useState, useEffect } from "react"
import {useParams } from "react-router-dom"
import {ItemList } from "../components/itemList"
import { getAllItems as getProductos, getItemsByCategory} from '../data/firestore.js';
import { Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner.jsx';

export function ItemListContainer( {greeting, items} ) {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const { category } = useParams();
    
    useEffect(() => {
        if (category === undefined) {
     document.title = 'Cafe Motos Ecommerce - Catálogo';       
    getProductos().then(respuestaPromise => {
        setProducts(respuestaPromise);
        setLoading(false);
    }); } else {
        document.title = `Cafe Motos Ecommerce - ${category}`;
    getItemsByCategory(category).then(respuestaPromise => {
        setProducts(respuestaPromise);
        setLoading(false);
    }); }   
    }, [category]);
    

if(loading){
  return <section id="menu" className="py-5 text-center container">
        
  <div className="album bg-degrade py-5">
  <div className="container">
    <div className="">
    <LoadingSpinner />
    </div></div></div>
</section>
}
return ( 
    <Container className='mt-4'>
        <div/>
        {products.length === 0 ? (<div>Cargando ...</div>) : (<ItemList products={products} />)}
    </Container>
)
}




// import data from "../data/products.json"
// export const ItemListContainer = props => {
//     const [products, setProducts] = useState([])

//     const { id } = useParams()

//     useEffect(() => {
//         const promesa = new Promise((resolve, rejected) => {
//             setTimeout(() => {
//                 resolve(data)
//             }, 2000)
            
//         })

//         promesa.then(result => {
//             if (id) {
//                 setProducts(result.filter(product => product.category === id))
//             } else {
//                 setProducts(result)
//             }            
//         })
//     }, [id])
