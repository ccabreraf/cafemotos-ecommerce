import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"

export const Item = ({ repuestos }) => {
    return (
        <Card style={{ width: '18rem' }} key={repuestos.id} className="float-start">
            <Card.Img variant="top" src={repuestos.img} objectfit='cover' borderradius="55" width='50vw' height='230vh'/>
            <Card.Body>
                <Card.Title>{repuestos.nombre}</Card.Title>
                <Card.Text>Categoría: {repuestos.category}</Card.Text>
                <Link to={`/item/${repuestos.id}`}>
                    <Button variant="primary">Ir al producto</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}
