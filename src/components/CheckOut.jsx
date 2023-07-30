import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import useCartContext from './CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function CheckOut() {
    document.title = `Cafe Motos - CheckOut`;
    const { cart, itemsTotal, precioTotal } = useCartContext();

    // Estados para los campos del formulario de cliente
    
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    // Estados para manejar los errores
    const [submitted, setSubmitted] = useState(false);
    const [errorMsg, setErrormsg] = useState(false);

        // Handle para el campo de nombre
    const handleNombre = (e) => {
        setNombre(e.target.value);
        setSubmitted(false);
    };

    // Handle para el campo de email
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handle para el cambio en el campo de telefono
    const handlePhone = (e) => {
        setPhone(e.target.value);
        setSubmitted(false);
    };


    // Funciones para verificar los inputs del formulario de cliente y mostrar los errores (si los hay) 

    function onlyLettersAndSpaces(str) {
    return /^[A-Za-z\s]*$/.test(str);
    }
    function containsArroba(str) {
    const tieneArroba = /@/;
    return tieneArroba.test(str);
    }

    function onlyNumbers(str) {
    return /^[0-9]+$/.test(str);
    }
    

    // Handle para el formulario de datos del cliente
    const handleSubmit = (e) => {
    e.preventDefault();
    if (!onlyLettersAndSpaces(nombre) || nombre === '' || !containsArroba(email) || email === '' || !onlyNumbers(phone) || phone === '') {
    setErrormsg(true);
    
    } else {
        setSubmitted(true);
        setErrormsg(false);
        Swal.fire({
            icon: 'success',
            title: 'Pedido completado',
            text: 'Gracias por su compra.',
        });
    }
    };

    // Mensaje de éxito
    const successMessage = () => {
        return (
        <div
            className="success"
            style={{
            display: submitted ? '' : 'none',
            }}>
            <h4 className="bg-success text-white scale-in-ver-center">Pago exitoso</h4>
        </div>
        );
    };

    // Mensaje de error 
    const errorMessage = () => {
        return (
        <div
            className="error"
            style={{
            display: errorMsg ? '' : 'none',
            }}>
            <h4 className="bg-danger text-white scale-in-ver-center">Por favor complete todos los campos correctamente</h4>
            
        </div>
        );
    };
    return (
    <div className="container">
        <main>
        <div className="py-3 text-center">
            <h2>Checkout</h2>
            <p className="lead">Su lista de compra y formulario de pago.</p>
        </div>
        <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Su carrito</span>
                <span className="badge bg-primary rounded-pill">{itemsTotal()}</span>
            </h4>
            <ul className="list-group mb-3">
            {cart.map(item => (
                <Container key={item.id} className="list-group-item justify-content-between lh-sm"><li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.categoria} {item.nombre} x{item.cant}</h6>
                    <small className="text-muted">Descripción {item.detail}</small>
                </div>
                <span className="text-muted">${item.price}</span>
                </li>
                </Container>
            ))}
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">Total: ${precioTotal()} CLP</h6>
                </div>
                </li>
            </ul>
            </div>
            <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Datos del cliente</h4>
            <div className="messages">
            {errorMessage()}
            {successMessage()}
        </div>
        
            <form className="needs-validation">
                <div className="row g-3">
                <div className="col-sm-12">
                    <label htmlFor="firstName" className="form-label">Nombre completo</label>
                    <input onChange={handleNombre} value={nombre} type="text" className="form-control input" id="name" placeholder="Nombre y Apellidos" required />
                    <div className="invalid-feedback">
                    Nombre requerido
                    </div>
                </div>
                
                <div className="col-12">
                    <label htmlFor="email" className="form-label">Correo electrónico <span className="text-muted"></span></label>
                    <input onChange={handleEmail} value={email} type="email" className="form-control input" id="email" placeholder="Ingrese su email" required />
                    <div className="invalid-feedback">
                    Por favor introduzca un email válido.
                    </div>
                </div>
                <div className="col-12">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input onChange={handlePhone} value={phone} type="phone" className="form-control input"  id="phone" placeholder="56912345678" required />
                    <div className="invalid-feedback">
                    Por favor ingrese su número de teléfono
                    </div>
                </div>
                </div>
                <hr className="my-4" />
                
                <hr className="my-4" />
                <button onClick={handleSubmit} className="w-100 btn btn-primary btn-lg" type="submit">Pagar</button>
            </form>
            
            </div>
            
        </div>
        </main>
        <hr />
        <div>
            <Link to="/"><Button className="bg-success m3">Volver al inicio</Button></Link>
        </div>
    </div>
    )
}
export default CheckOut;
