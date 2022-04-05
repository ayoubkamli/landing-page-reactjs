import Card from '../components/Card'

import styles from '../css/section_zero.module.css'

const SectionZero = () => {
    return <div className={styles.div_card}>
        <Card title='Peace of Mind' />
        <Card title='Set For Life'/>
        <Card title='100% Satisfaction' isActive />
    </div>
}

export default SectionZero;