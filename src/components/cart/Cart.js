import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";

const Cart = () => {
  const itemsArray = useSelector((state) => state.cart.items);
  return (
    <div className={styles.cart}>
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
