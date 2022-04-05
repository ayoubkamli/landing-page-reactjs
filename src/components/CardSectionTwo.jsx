import styles from '../css/card_two.module.css'
import {RiStarFill, RiStarHalfFill, RiStarLine} from 'react-icons/ri'

const CardSectionTwo = (prop) => {
  
    return <div className={styles.card}>
            <img className={styles.profile} src={prop.img} alt="" />
            <p className={styles.card_p}>{prop.text}</p>
            <div className={styles.rate}>
                <RiStarFill color="#F3CD03" />
            <RiStarFill color="#F3CD03" />
            <RiStarFill color="#F3CD03" />
            <RiStarHalfFill color="#f3cf03" />
            <RiStarLine color="#F3CD03" />
            </div>
            
    </div>
}

export default CardSectionTwo;