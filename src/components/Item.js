import React from 'react'
import styles from './Item.module.css';
import {useDispatch,useSelector} from 'react-redux'
import { cartActions } from '../store/cart-slice';

const Item = (props) => {
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(cartActions.addItem({
            title: props.title,
            price:props.price,
            id:props.id
        }))
    }
  return (
    <div className={styles.item}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <button onClick={addToCartHandler}>Add to cart</button>
    </div>
  )
}

export default Item