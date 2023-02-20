import React from 'react'
import styles from './CartItem.module.css';

const CartItem = (props) => {
  return (
    <div className={styles.cartitem}>
    <h3>{props.title}</h3>
    <p>{props.price}</p>
    <button>+</button>
    <button>-</button>
    </div>
  )
}

export default CartItem