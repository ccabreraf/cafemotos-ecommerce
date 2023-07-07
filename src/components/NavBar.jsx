import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import { CartWidget } from "./CartWidget";

import data from "../data/products.json";

const categorias = data.map(product => product.categoria)
const unica = new Set(categorias)

console.log([...unica])

export const NavBar = () => (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand>Cafe Motos</Navbar.Brand>
            <Nav className="me-auto"> {[...unica].map(item => (
                <NavLink key={item} className="nav-link" to={`/category/${item}`}>{item}</NavLink>
            ))}
            </Nav>
            <CartWidget />
        </Container>
    </Navbar>
)

/* <Nav.Link href="#home">Inicio</Nav.Link>
<Nav.Link href="#features">Productos</Nav.Link>
<Nav.Link href="#pricing">Contacto</Nav.Link> */