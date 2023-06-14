import cart from "../assets/icons8-carrito-de-compras.gif";

const styles ={
    span: {
        color: "white",
        paddingLeft: 10,
    }
}
export const CartWidget = () => (
    <>
        <img src={cart} alt="Carrito" /> <span style={styles.span}>0</span>
    </>
)