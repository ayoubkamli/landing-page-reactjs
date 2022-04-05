import CardSectionTwo from '../components/CardSectionTwo';
import styles from '../css/section_two.module.css'

const SectionTwo = () => {
    const img ="https://images.sk-static.com/images/media/img/col3/20190321-015230-529685.png";
    const text = "Slate helps you see how many more tSlate helps you see how many more tSlate helps you see how many more to work to reach your financial goal for the month and year."
    return (
        <div className={styles.container} >
            <h2 className={styles.title}>Indestry</h2>
            <p className={styles.text}> Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
            <div className={styles.card_container}>
                <CardSectionTwo img={img} text={text}></CardSectionTwo>
                <CardSectionTwo img={img}  text={text}></CardSectionTwo>
                <CardSectionTwo img={img}  text={text}></CardSectionTwo>
            </div>
        </div>
    );
}

export default SectionTwo;