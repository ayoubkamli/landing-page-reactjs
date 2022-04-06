import CardSectionTwo from '../components/CardSectionTwo';
import styles from '../css/section_two.module.css'

const SectionTwo = () => {
    const img ="https://media-exp1.licdn.com/dms/image/C4D03AQG-wbnKV5K1KA/profile-displayphoto-shrink_800_800/0/1604321671598?e=2147483647&v=beta&t=mgsHz06_Ib9WHCAsGPZir2yz1ImARGHF5wEhOZ7dHbw";
    const text = "Slate helps you see how many more tSlate helps you see how many more tSlate helps you see how many more to work to reach your financial goal for the month and year."
    return (
        <div className={styles.container} >
            <h2 className={styles.title}>Industry</h2>
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