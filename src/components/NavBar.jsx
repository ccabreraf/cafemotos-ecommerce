import cart from "../assets/icons8-carrito-de-compras.gif";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Cafe Motos</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#features">Productos</Nav.Link>
                <Nav.Link href="#pricing">Contacto</Nav.Link>
            </Nav>
        </Container>
        <img src={cart} alt="Carrito" /> 0
    </Navbar>
)

