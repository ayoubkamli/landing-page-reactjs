import styles from './css/card_one.module.css'

import {FiUsers} from 'react-icons/fi'
import { useEffect, useState } from 'react'
const CardSectionOne = (prop) => {
    const [isActive, setIsActive] = useState(false);
    useEffect( () =>{
         const active = prop.isActive;
        setIsActive(active);
        console.log(active);
 
    }, []);
  
    return <div className={ isActive ?  styles.card_active : styles.card }>
            <FiUsers className={styles.icon} />
            <h2 className={styles.card_h2_style}>{prop.title}</h2>
            <p className={styles.card_p}>{prop.text}</p>
    </div>
}

export default CardSectionOne;