import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar"
import { CartContextProvider } from './components/CartContext';
import CartView from './components/CartView';

import "./App.css"



export default function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greetings="Nuestros Productos" />} />
        <Route path="/category/:id" element={<ItemListContainer greetings="Nuestros Productos" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartView greeting="Este es su carrito"/>} />
      </Routes>
      
    </BrowserRouter>
    </CartContextProvider>
  )
}
