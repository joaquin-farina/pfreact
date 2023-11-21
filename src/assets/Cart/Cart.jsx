import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css';

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
               <div className="buttoncart"><h2>Selecciona un producto. </h2>
                <button className="buttoncarta"><Link to="/">Ver Productos</Link></button>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="cartdiv">
            {
                carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)
            }
            <h3>Total: ${total} </h3>
            <h3>Cantidad Total: {cantidadTotal} </h3>
            <button onClick={() => vaciarCarrito()} > Vaciar Carrito </button>
            <button><Link to="/checkout">Finalizar Compra</Link></button>
            </div>
        </div>
    )
}

export default Cart