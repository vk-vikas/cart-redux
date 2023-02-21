import React from 'react'
import styles from './CartItem.module.css';
import {useDispatch} from 'react-redux';
import {cartActions} from '../../store/cart-slice';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const incrementHandler = ()=> {
    dispatch(cartActions.addItem({
      id: props.id
    }))
  }
  const decrementHandler = ()=> {
    dispatch(cartActions.removeItem({
      id: props.id
    }))
  }
  return (
    <div className={styles.cartitem}>
    <h3>{props.title}</h3>
    <p>X{props.quantity}</p>
    <p>{props.price}</p>
    <button onClick={incrementHandler}>+</button>
    <button onClick={decrementHandler}>-</button>
    </div>
  )
}

export default CartItem