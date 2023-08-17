import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import  CartWidget from "./CartWidget";
import { getAllCategories } from '../data/firestore.js';
import React, { useState, useEffect } from 'react';

async function obtenerCategoriasUnicas() {
    try {
        const categories = await getAllCategories();
        const uniqueCategories = [...new Set(categories.map(item => item.category))];
        return uniqueCategories;
    } catch (error) {
        console.error('Error obteniendo las categorías:', error);
        throw error;
    }
};

export const NavBar = () => {
    const [uniqueCategories, setUniqueCategories] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const categories = await obtenerCategoriasUnicas();
                setUniqueCategories(categories);
            } catch (error) {
                console.error('Error obteniendo las categorías:', error);
            }
        }

        fetchCategories();
    }, []);

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ textDecoration: 'none' }} to={"/"}>
                    <Navbar.Brand>Cafe Motos</Navbar.Brand>
                </NavLink>
                <Nav className="me-auto">
                    {uniqueCategories.map(item => (
                        <NavLink key={item} className="nav-link" to={`/category/${item}`}>
                            {item}
                        </NavLink>
                    ))}
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    );
};




// async function NavBar = () => {

//     const uniqueCategories = await obtenerCategoriasUnicas();
//     console.log(uniqueCategories);

//     <Navbar bg="dark" variant="dark">
//     <Container>
//         <NavLink style={{textDecoration: 'none'}} to={"/"}>
//             <Navbar.Brand>Cafe Motos</Navbar.Brand>
//             </NavLink>
//         <Nav className="me-auto"> {uniqueCategories.map(item => (
//             <NavLink key={item} className="nav-link" to={`/category/${item}`}>{item}</NavLink>
//         ))}
//         </Nav>
//         <CartWidget />
//     </Container>
//     </Navbar>
// };

// export default NavBar
// // import data from "../data/products.json";

// // const categorias = data.map(product => product.categoria)
// // const unica = new Set(categorias)

// // console.log([...unica])