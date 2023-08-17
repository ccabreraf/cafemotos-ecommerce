import React from 'react';
import { Container } from 'react-bootstrap';
import logoTienda from '../assets/Logo-CMotos Chico.jpeg';

function LoadingSpinner() {
return (
<Container><img src={logoTienda} height="380" width="480" alt="logo cafe motos" className="img-fluid" />
    <div className="spinner-grow text-primary" role="status">
    <span className="visually-hidden">Cargando...</span>
    </div>

</Container>
)
}

export default LoadingSpinner