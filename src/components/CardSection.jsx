import Card from './Card'

import styles from './css/body.module.css'

const Body = () => {
    return <div className={styles.div_card}>
        <Card title='Peace of Mind' />
        <Card title='Set For Life'/>
        <Card title='100% Satisfaction' isActive />
    </div>
}

export default Body;