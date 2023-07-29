export const ItemDetail = ({ repuestos }) => {
    return (
        <>
            <div>Id:{repuestos.id}</div>
            <div>Nombre: {repuestos.nombre}</div>
            <div>Categoria: {repuestos.categoria}</div>
            <img src={repuestos.img} alt={repuestos.nombre} height={'230vh'}/>
            <div>Descripción: {repuestos.detail}</div>
            <div>Precio: ${repuestos.precio}</div>
        </>
    )
}
