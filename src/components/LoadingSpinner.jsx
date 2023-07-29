import React from 'react';
import { Container } from 'react-bootstrap';
import logoTienda from '../assets/Logo-CMotos Chico.jpeg';

function LoadingSpinner() {
return (
<Container><img src={logoTienda} height="380" width="480" alt="logojimp" className="img-fluid" />
    <div class="spinner-grow text-primary" role="status">
    <span class="visually-hidden">Cargando...</span>
    </div>

</Container>
)
}

export default LoadingSpinner