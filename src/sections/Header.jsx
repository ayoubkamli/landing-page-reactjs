import Navbar from '../components/Navbar';
import Logo from '../components/Logo'
import styles from '../css/header.module.css'
import MainTitle from '../components/MainTitle';
import ActionButton from '../components/ActionButton';

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