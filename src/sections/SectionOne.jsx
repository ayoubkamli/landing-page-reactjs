import { FiPhoneOff } from "react-icons/fi";
import CardSectionOne from "../components/CardSectionOne";
import styles from '../css/section_one.module.css'

const SectionOne = () => {
    const text = 'The quick fox jumps over the lazy dog The quick fox jumps over the dog'
    const title = 'The quick fox'
    return (
        <div className={styles.div_style}>
            <CardSectionOne title={title} text={text}></CardSectionOne>
            <CardSectionOne title={title}  text={text}></CardSectionOne>
            <CardSectionOne title={title}  text={text}></CardSectionOne>
        </div>
    );
}

export default SectionOne;