import styles from '../css/header.module.css'

const MainTitle = () => {


    return (
        <div className={styles.main_title} >
            <h1 className={styles.h1_style}>We Ensure A Best <br />Insurance Service</h1>
            <h2 className={styles.h2_style}>We know how large objects will act, but things on a <br /> small scale just do not act that way</h2>
        </div>
    );
}

export default MainTitle;