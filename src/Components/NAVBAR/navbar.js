import React from 'react';

import './index.css'

import styles from './index.module.css'


export const icons = [
    'payments',
    'home',
    'investments',
]


export default function Component() {
    return (

        <div className={styles.adjust}>
            <section className={styles.navbar}>
                {icons.map((icon) =>
                        <img className = {styles.icon} src = {process.env.PUBLIC_URL + `/images/icons/${icon}.svg`}/>
                )}         
            </section>
        </div>
    
    )
}