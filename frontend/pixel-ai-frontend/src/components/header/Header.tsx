import styles from '@/components/header/header.module.css';

const Header = () => {
    return (
        <div className={ styles.header }>
            <h1 className={ styles.logo }>PixelArt Generator</h1>
        </div>
    );
}

export default Header;
