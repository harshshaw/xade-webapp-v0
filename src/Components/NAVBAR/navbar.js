import React from 'react';

import styles from './index.module.css'

export const icons = [
    ['home', 'icons/home.svg'],
    ['payments', 'icons/payments.svg'],
    ['savings', 'icons/savings.svg'],
    ['investments', 'icons/investmens.svg'],
]


export default function Component() {
     const listItems = icons.map((icon) =>
        <li>{icon[0]}</li>
    )   
    return (

        <>
            <section className={styles.navbar}>
                {listItems}
            </section>
        </>
    
    )
}