import styles from './css/header.module.css'
const ActionButton = () => {
    return (
        <div className={styles.button_style}>
        <a className='cta_fill' href="#" > <button className={styles.button_fill}>Get Quote Now</button> </a>
        <a className='cta_outlined' href="#" > <button className={styles.button_outlined}>Learn More</button> </a>
        </div>
    );
}

export default ActionButton;