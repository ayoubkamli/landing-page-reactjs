import Navbar from './Navbar';
import Logo from './Logo'
import styles from './css/header.module.css'
import MainTitle from './MainTitle';
import ActionButton from './ActionButton';

const Header = () => {
    return (
        <div className={styles.container}>
           <header>
                <Logo></Logo>
                <Navbar></Navbar>
            </header>
           <MainTitle/>
           <ActionButton/>
        </div>
        
    );
}
export default Header;