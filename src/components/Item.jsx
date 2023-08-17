import React from 'react'
import { Button, Card, Badge, Container } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import useCartContext from './CartContext.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


// import Button from "react-bootstrap/Button"
// import Card from "react-bootstrap/Card"
// import { Link } from "react-router-dom"

export function Item({ item, stock, name, price, detail, img} ) {
    const { getItemQuantity, isInCart } = useCartContext();

    return (
        <Card key={item.id} className="bg-light h-100 shadow-lg p-3 mb-3 mr-2 ml-2 rounded">
        <Card.Title className="fw-bolder">{name} </Card.Title>
        <span className="position-absolute top-4 end-4 translate-middle badge rounded-pill bg-info">{isInCart(item) ?
        <><div className="cart-icon2"><FontAwesomeIcon icon={faCartShopping} size="1x" color="black" /><div className="mostrar-cantidadItem">{getItemQuantity(item)}</div></div></>
        :
        <><div className="cart-icon2"><FontAwesomeIcon icon={faCartShopping} size="1x" color="black" /><div className="mostrar-cantidadItem">0</div></div></>
    }</span>
    <LinkContainer to={`/item/${item}`}><Card.Img className="picHover rounded" variant="top" src={img} alt={name} /></LinkContainer>
        <Card.Body>
        
        <Card.Text>
        Descripción: {detail}
        </Card.Text>
        </Card.Body>
        <Container className="d-flex justify-content-center text-center align-middle w-100 mw-30">
        <Badge className="mb-4 text-center m-1">Stock {stock}</Badge>
        <Badge bg="success me-2 mb-4 text-center m-1">$ {price} COP</Badge>
        </Container>
        <LinkContainer to={`/item/${item}`}><Button className="btn btn-info">Ver detalles</Button></LinkContainer>
        </Card>
    
    );
};

// export const Item = ({ repuestos }) => {
//     return (
//         <Card style={{ width: '18rem' }} key={repuestos.id} className="float-start">
//             <Card.Img variant="top" src={repuestos.img} objectfit='cover' borderradius="55" width='50vw' height='230vh'/>
//             <Card.Body>
//                 <Card.Title>{repuestos.nombre}</Card.Title>
//                 <Card.Text>Categoría: {repuestos.category}</Card.Text>
//                 <Link to={`/item/${repuestos.id}`}>
//                     <Button variant="primary">Ir al producto</Button>
//                 </Link>
//             </Card.Body>
//         </Card>
//     )
// }
