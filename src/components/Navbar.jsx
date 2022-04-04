import styles from './css/navbar.module.css'
const Navbar = () => {
    return (
        <>
        <nav>
            <ul className={styles.nav__links}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <a className='cta' href="#" > <button className={styles.cta_button}>Become a member</button> </a>
        </>
    );
}

export default Navbar;