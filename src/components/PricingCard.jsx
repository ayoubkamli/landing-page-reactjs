import styles from '../css/pricing.module.css'
import {FaCheckCircle} from 'react-icons/fa'
import { useEffect, useState } from 'react';

const PricingCard = (props) => {

    const [card, setCard] = useState (styles.card)
    const [list, setList] = useState (styles.list)

    console.log(props.isActive + 'is active');

    let cardStyle = () => {
        if(props.isActive == 'true'){
            setCard(styles.card__active);
            setList(styles.list__active);
        } 
    }
    useEffect (() => {
        cardStyle();
    })
    console.log(card);
  
    return <div className={card}>
            <h1 className={styles.title}>STANDARD</h1>
            <h2 className={styles.discription}>Organize across all apps by hand</h2>
            <p className={styles.pricing}><span className={styles.price}>9.99</span><span className={styles.duration}>Per month</span> </p>   
            <ul className={list}>
                <li className={list}><span><FaCheckCircle color='green' size='25px'/></span> Unlimited product updates</li>
                <li className={list}><span><FaCheckCircle color='green' size='25px'/></span> Unlimited product updates</li>
                <li className={list}><span><FaCheckCircle color='green' size='25px'/></span> Unlimited product updates</li>
                <li className={list}><span><FaCheckCircle color='gray' size='25px'/></span> 1GB  Cloud storage</li>
                <li className={list}><span><FaCheckCircle color='gray' size='25px'/></span> Email and community support</li>
            </ul>
    </div>
}

export default PricingCard;