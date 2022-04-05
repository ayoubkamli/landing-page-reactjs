import styles from '../css/card.module.css'

import {FiUsers} from 'react-icons/fi'
import { useEffect, useState } from 'react'
const Card = (prop) => {
    const [isActive, setIsActive] = useState(false);
    useEffect( () =>{
         const active = prop.isActive;
        setIsActive(active);
        console.log(active);
 
    }, []);
  
    return <div className={ isActive ?  styles.card_active : styles.card }>
            <FiUsers className={styles.icon} />
            <h2 className={styles.card_h2_style}>{prop.title}</h2>
            <p className={styles.card_p}>The quick fox jumps over the lazy dog </p>
    </div>
}

export default Card;