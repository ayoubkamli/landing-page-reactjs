import PricingCard from "../components/PricingCard";

import styles from '../css/pricing.module.css'

const Pricing = () => {
    return (
        <div className={styles.container} >
            <h2 className={styles.title}>Pricing</h2>
            <p className={styles.discription}> Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
            <div className={styles.card_container}>
                <PricingCard ></PricingCard>
                <PricingCard isActive='true' ></PricingCard>
                <PricingCard ></PricingCard>
            </div>
        </div>
    );
}

export default Pricing;