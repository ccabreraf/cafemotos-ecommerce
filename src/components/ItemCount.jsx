import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2'


const ItemCount = ({stock, initial, onAdd, nombre}) => {
  const [count, setCount] = useState(initial)
  function pluralizeWord(singularWord, pluralWord) {
    return count > 1 ? pluralWord : singularWord;
  }
  const handleAgregar = () => {
    if (count < stock) {
      setCount(count + 1)
      
    } else {
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
        icon: 'error',
        color: 'black',
        title: 'No hay stock suficiente'
      })
    } 
  }

  const handleRestar = () => {
    if (count > initial) {
      setCount(count - 1)
      
    }
  }

const handleOnAdd = () => {
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
    title: `${count} ${nombre} ${pluralizeWord("agregado", "agregados")} al carrito`
  })
        onAdd(count);
        setCount(initial);
    } 

  return (
    <>  
      <div className="d-flex justify-content-center text-center align-items-center contador counter-input input-group mb-3">
        
        <div className="input-group-prepend">
          <Button onClick={handleRestar} className="text-white btn btn-outline-secondary">-</Button>
        </div>
        <input type="text" size="sm" className="form-control h-100 text-center" readOnly value={count} />
        <div className="input-group-append">
          <Button onClick={handleAgregar} className="text-white btn btn-outline-secondary">+</Button>
        </div>
        
        <Button onClick={handleOnAdd} className="text-white btn btn-outline-secondary m-2">Agregar al carrito</Button>
      </div>
      
    </>
    
  )
}

export default ItemCount