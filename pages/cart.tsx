import Image from "next/image";
// Importing hooks from react-redux
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/CartPage.module.css";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cart.slice";
import Link from "next/link";

const CartPage = () => {
  // Extracting cart state from redux store
  const cart = useSelector((state: Number) => state.cart);

  // Reference to the dispatch function from redux store
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <>
          <h1>Your Cart is Empty!</h1>
          <br />
          <button>
            <Link href="/">Go to home</Link>
          </button>
        </>
      ) : (
        <>
          <div className={styles.header}>
            {/* <div>Image</div> */}

            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          {cart.map((item) => (
            <div key={item.id} className={styles.body}>
              {/* <div className={styles.image}>
                <Image src={item.image} height="90" width="65" />
              </div> */}
              <p>{item.name}</p>
              <p>$ {item.price}</p>
              <p>{item.quantity}</p>
              <div className={styles.buttons}>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
              </div>
              <p>$ {item.quantity * item.price}</p>
            </div>
          ))}
          <h2>Grand Total: $ {getTotalPrice()}</h2>
          <br />
          <br />
          <button>
            <Link href="/">Go to home</Link>
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
