import { useState, useEffect } from "react"
import {useParams } from "react-router-dom"
import {ItemList } from "../components/itemList"
import { getAllItems as getProductos, getItemsByCategory} from '../data/firestore.js';
import { Container, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
            }); 
        } else {
            // AQUI CREO QUE ESTA EL PROBLEMA
            document.title = `Cafe Motos Ecommerce - ${category}`;
            getItemsByCategory(category).then(respuestaPromise => {
            setProducts(respuestaPromise);
            setLoading(false);
            }); 
        }  
    }, [category]);
    
    function setCatPath(){
        if (category) {
            return <Container className="d-flex text-center justify-content-center mb-10 pb-10 align-items-center p-5"><Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>catálogo</Breadcrumb.Item><Breadcrumb.Item active>{category}</Breadcrumb.Item></Container>;
        }   else {
            return <Container className="d-flex text-center justify-content-center mb-10 pb-10 align-items-center p-5"><Breadcrumb.Item active>catálogo</Breadcrumb.Item></Container>;
        }
    }


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
        <section id="menu" className="text-center container slide-in-fwd-center">
    <Container className="d-flex text-center justify-content-center mb-10 pb-10 align-items-center"><Breadcrumb>

    {setCatPath()}
    </Breadcrumb></Container> 
        <div className="album">
        <div className="container">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-3">
        <ItemList items={products} />
        </div></div></div>
        
    </section>        
    );
}
// return ( 
//     <Container className='mt-4'>
//         <div/>
//         {products.length === 0 ? (<div>Cargando ...</div>) : (<ItemList products={products} />)}
//     </Container>
// )





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
