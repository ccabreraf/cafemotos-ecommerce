import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Badge, Container } from 'react-bootstrap';
import useCartContext from './CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useState } from 'react';
import './CartView.css';
import logoTienda from '../assets/Logo-CMotos Chico.jpeg';


function CartView({ greeting }) {
    const { cart, removeFromCart, clearCart, itemsTotal, precioTotal } = useCartContext();
    const [isActive, setActive] = useState(false);
        
    const handleVaciar = () => {
      const Toast = Swal.mixin({
        toast: true,
        background: '#ff0000',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: false,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Has vaciado tu carrito'
      })
      clearCart();
        } 

        const handleRemove = () => {
          cart.forEach(itemCart => {
          setActive(isActive);
          function pluralizeWord(singularWord, pluralWord) {
            return itemCart.cant > 1 ? pluralWord : singularWord;
          }
        const Toast = Swal.mixin({
    toast: true,
    background: '#ff0000',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: false,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: `${itemCart.cant} ${itemCart.nombre} ${pluralizeWord("eliminada", "eliminadas")} del carrito`
  })
          
          removeFromCart(itemCart.id)
        })
        
            } 

            useEffect(() => {
              function setTitle(title){
              document.title = title;  
              }
              setTitle("Cafe Motos - Carrito");
            }, []);

    
    if (cart.length === 0) {
      return <section id="Carrito" className="py-5 text-center container">
      <div className="row py-lg-5">
          <div className="col-12">
          <p>No hay items en su carrito</p>
          <img src={logoTienda} width="480px" alt="Cafe Motos logo" className="img-fluid" />
          <p></p>
          <Link to="/">Regresar al menú</Link>
        </div>
      </div>
    </section>
}
else { 
  return (
    <section id="carrito" className="py-2 text-center container slide-in-fwd-center">
   <div className="row py-lg-2">
    <div><Badge bg="primary" className="m-1"><h6>Total de items: {itemsTotal()}</h6></Badge><Badge className="m-3" bg="primary"><h6> Costo Total: $ {precioTotal()} CLP</h6></Badge><div></div><div><Link to="/">regresar al catálogo</Link></div> 
     </div>
   </div>
   <div className="album py-5">
     <div className="container">
       <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 g-3">
        {cart.map( itemCart => {
          
        return (
              <Container id={itemCart.id} className={isActive ? 'bounce-out-top': null}  key={itemCart.id}>
                <Card className="bg-light shadow-lg p-3 mb-3 mr-2 ml-2 rounded text-center">
                  <Card.Title className="fw-bolder">{itemCart.nombre} x{itemCart.cant}</Card.Title>
                  <Card.Img variant="top" src={itemCart.img} alt={itemCart.nombre} />
                  <Card.Body>
                    <Card.Text>Categoría: {itemCart.categoria} </Card.Text>
                    <Badge className="m-1" bg="success"><h6>x1 ${itemCart.price} </h6></Badge>
                    <Badge className="m-1" bg="primary"><h6>x{itemCart.cant} ${itemCart.price * itemCart.cant}</h6></Badge>
                    <Button onClick={handleRemove} className="btn btn-danger w-50 mt-3">Eliminar</Button>
                  </Card.Body>
                </Card>
              </Container>
        )
      
      })}
      </div>
            </div>
            
          </div>
          <Button className="m-3 bg-danger" onClick={handleVaciar}> Vaciar carrito</Button><Link to="/checkout"><Button className="bg-success m3">Ir al pago</Button></Link> 
        </section>
    )
  }
}

export default CartView