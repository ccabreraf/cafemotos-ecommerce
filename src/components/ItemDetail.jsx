export const ItemDetail = ({ repuestos }) => {
    return (
        <>
            <div>{repuestos.id}</div>
            <div>{repuestos.nombre}</div>
            <div>{repuestos.categoria}</div>
            <img src={repuestos.img} alt={repuestos.nombre} />
        </>
    )
}
