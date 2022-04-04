import Navbar from './Navbar';
import Logo from './Logo'
import styles from './css/header.module.css'

const Header = () => {
    return (
        <div className={styles.container}>
           <header>
            <Logo></Logo>
            <Navbar></Navbar>
        </header> 
        </div>
        
    );
}
export default Header;