import React from 'react'
import Item from './Item'
import styles from './Items.module.css'

const DUMMY_ITEMS = [
    {
        id: 1,
        title: 'keyboard',
        price: 2500,
        description: 'Hp wireless keyboard'
    },
    {
        id: 2,
        title: 'Monitor',
        price: 14000,
        description: '32 inch 4k Dell monitor'
    }
]
const Items = () => {
  return (
    <div className={styles.items}>
    {DUMMY_ITEMS.map(i => 
    <Item 
        title={i.title}
        key={i.id}
        id={i.id}
        description={i.description}
        price={i.price}
    />)}
    </div>
  )
}

export default Items