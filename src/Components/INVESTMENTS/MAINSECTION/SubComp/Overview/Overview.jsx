import React from "react";
import SymbolOverview, {Themes} from 'react-tradingview-widget'
import styles from './Overview.module.css'

export default function Overview() {
    React.useEffect(() => {
        
    })
    return (
        <>
        <div container className={styles.Chart}>
        <SymbolOverview

            symbol="BTC1!"
            theme={Themes.DARK}
            backgroundColor = "#000"
            // eslint-disable-next-line 
            style = "3"
            // locale="fr"
            autosize

         />
        </div>
        </>
    )
}