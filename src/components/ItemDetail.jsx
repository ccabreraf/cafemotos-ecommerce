import React, { useState } from 'react';
import { Badge, Container, Breadcrumb } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import useCartContext from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';



function ItemDetail({  repuestos } ) {
  
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart, estaEnCarrito } = useCartContext();
  const { getItemQuantity } = useCartContext();
  function onAdd(count) {    
    
    setIsInCart(true);
    addToCart(repuestos, count);
    
}

const catPath = `/category/${repuestos.category}`;

if(repuestos.img === undefined){
  return <LoadingSpinner />
  }

  document.title = `Cafe Motos - ${repuestos.category}/${repuestos.nombre}`;

  return (
    <><div><Container className="d-flex text-center justify-content-center p-5 slide-in-fwd-center"><Breadcrumb listProps={{ className: "justify-content-center" }} className="justify-content-center">
    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>catálogo</Breadcrumb.Item>
    <Breadcrumb.Item linkAs={Link} linkProps={{ to: `${catPath}` }}>
      {repuestos.category}
    </Breadcrumb.Item>
    <Breadcrumb.Item active>{repuestos.nombre}</Breadcrumb.Item>
  </Breadcrumb></Container></div>
    <div className="container bootstrap snippets bootdey slide-in-fwd-center">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6 push-bit align-middle">
            <span className="position-absolute top-10 end-90 translate-middle badge rounded-pill bg-info">{isInCart && estaEnCarrito(repuestos.id) ?
              <><div className="cart-icon2"><FontAwesomeIcon icon={faCartShopping} size="3x" color="black" /><div className="mostrar-cantidadItem">{getItemQuantity(repuestos.id)}</div></div></>
              :
              <><div className="cart-icon2"><FontAwesomeIcon icon={faCartShopping} size="3x" color="black" /><div className="mostrar-cantidadItem">0</div></div></>}</span>
            <img src={repuestos.img} alt={repuestos.nombre} className="img-fluid push-bit align-middle h-100 rounded" />
            {estaEnCarrito(repuestos.id) ?
            <Link to="/cart">
<div className="card-img-overlay h-100 d-flex flex-row justify-content-end">
    <div className="card-text border-0 bg-semitransparent text-center">
        <Badge className="bg-success">Ir al carrito</Badge>
    </div>
</div>
</Link>
:
null
            }
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6 push-bit text-center">
            <div className="clearfix py-3">
              <div className="pull-right">
                <h1><strong>{repuestos.nombre}</strong><br /></h1>
                <h3><strong>{repuestos.category}</strong><br /></h3>
                <span className="h2"><strong><Badge bg="success">Precio {repuestos.price}$</Badge></strong>
                {estaEnCarrito(repuestos.id) ?
<Badge className="bg-secondary ms-2">x{getItemQuantity(repuestos.id)} = {repuestos.price * getItemQuantity(repuestos.id)}$</Badge>
:
null}
                </span>
                <br />
              </div>
              <span className="h4">
              </span>
            </div>
            <hr />
            <span>
              {repuestos.detail}
            </span>
            <hr />
            <ItemCount onAdd={onAdd} stock={repuestos.stock} initial={1} itemName={repuestos.nombre} />
          </div>
        </div>
      </div></>
  )
}

export default ItemDetail