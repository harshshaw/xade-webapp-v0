import React from 'react';
import styles from './index.module.css'

export default function Component() {
    return (
        <>
            <section className={styles.titlebar}>
                <p className = {styles.logo}>XADE</p>

                <div className = {styles.img} style = {{'paddingTop': '10px'}}>
                    <img className = {styles.settings}  src={process.env.PUBLIC_URL + '/images/icons/settings.svg'} />
                </div>
            </section>
        </>
        )
}