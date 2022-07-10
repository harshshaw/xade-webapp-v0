import React from 'react';
import styles from './mainsection.module.css'
import Overview from './SubComp/Overview.jsx'
import Trade from './SubComp/Trade.jsx'


export default function Component() {
    let [state, setState] = React.useState(true);





    return (
        
        <>
            <div className = {styles.container}>
                     <div className = {styles.toggleBar}>
                        <button onClick = {() => setState(true)} className = {styles.overviewClick + "  " + (state?styles.highlight:'')}>Overview</button>
                        <button onClick = {() => setState(false)} className = {styles.tradeClick + "  " + ((!state)?styles.highlight:'')}>Trade</button>
                     </div>
            </div>

            <div className = {styles.yeahthis}>
                    {state ? 
                        <Overview />
                            :
                        <Trade />
                    }
                </div>
        </>
    
        )
}   