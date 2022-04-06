import styles from '../css/map.module.css'
const MapSection = () => {
    return (
        <div className={styles.container}  >
            <div className={styles.content}>
                <div className={styles.text}>
                    <p className={styles.title}>We Have Branches All Over The World</p>
                    <p className={styles.description}>The gradual accumulation of information about atomic and
                        small-scale behaviour during the first quarter of the 20th
                        century, which gave some indications about how small things
                        do behave, produced an increasing confusion which was
                        Heisenberg, and Born.</p>
                </div>
                <img src={require("../images/map.png")} alt="img" width='250px' height='120px' />
            </div>
        </div>
    );
}

export default MapSection;