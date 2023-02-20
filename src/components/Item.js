import React from 'react'
import styles from './Item.module.css'

const Item = (props) => {
  return (
    <div className={styles.item}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <button>Add to cart</button>
    </div>
  )
}

export default Item