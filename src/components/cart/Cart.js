import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";

const Cart = () => {
  const itemsArray = useSelector((state) => state.cart.items);
  return (
    <div className={styles.cart}>
      <h2 className={styles.heading}>Your Shopping Cart</h2>
      {itemsArray.map((i) => (
        <CartItem
          key={i.id}
          id={i.id}
          title={i.title}
          price={i.price}
          quantity={i.quantity}
        />
      ))}
    </div>
  );
};

export default Cart;
