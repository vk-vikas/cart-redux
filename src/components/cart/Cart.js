import React from 'react'
import {useSelector} from 'react-redux';
import CartItem from './CartItem';
import styles from './Cart.module.css';

const Cart = () => {
    const itemsArray = useSelector(state => state.cart.items)
  return (
    <div className={styles.cart}>
        {itemsArray.map(i => (
            <CartItem 
                title={i.title}
                price={i.price}
            />
        ))}
    </div>
  )
}

export default Cart