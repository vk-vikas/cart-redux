import React from "react";
import styles from "./CartItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";


const CartItem = (props) => {
  const dispatch = useDispatch();
  // const cart = useSelector(state => state.cart.items);


  const incrementHandler = () => {
    dispatch(
      cartActions.addItem({
        id: props.id,
        title: props.title,
        price: props.price
      })
    );
  };
  const decrementHandler = () => {
    dispatch(
      cartActions.removeItem(props.id)
    );
    
  };
  return (
    
    <div className={styles.cartitem}>
      <div>
        <h3>{props.title}</h3>
        <p className={styles.quantity}>X{props.quantity}</p>
        <p className={styles.price}>₹ {props.price}</p>
      </div>
      <div>
        <button className={styles.btn} onClick={incrementHandler}>+</button>
        <button className={styles.btn} onClick={decrementHandler}>-</button>
      </div>
    </div>
  );
};

export default CartItem;
