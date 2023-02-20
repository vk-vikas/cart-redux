import React from 'react'
import styles from './Navbar.module.css';
import { uiActions } from '../store/ui-slice';
import {useDispatch,useSelector} from 'react-redux';

const Navbar = () => {
    const dispatch = useDispatch();

    const totalQuantity = useSelector(state => state.cart.totalQuantity);

    const cartShowHandler =() => {
        dispatch(uiActions.toggle());
    }

  return (
    <div className={styles.nav}>
        <h3>CartApp</h3>
        <button onClick={cartShowHandler}>Cart {totalQuantity}</button>
    </div>
  )
}

export default Navbar