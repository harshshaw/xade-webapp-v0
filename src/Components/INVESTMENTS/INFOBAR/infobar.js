import React from 'react';
import styles from './index.module.css';

export default function Component() {
    return (

        <div className={styles.horicenter}>
            <div className = {styles.infobar}>
                    <div className = {styles.details}>
                        <img className = {styles.logo} src = {process.env.PUBLIC_URL + "/images/ticker/bitcoin.png  "}  />
                        <p className = {styles.name}>BTC</p>
                    </div>  

                    <div className = {styles.price}>
                        <p className = {styles.amount}>$ 21,490.10</p>
                    </div> 
            </div>
            </div>  

    
        )
}