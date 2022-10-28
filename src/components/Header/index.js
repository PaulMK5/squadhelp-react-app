import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = ({ onSwitch, switchBtn }) => {
  return (
    <div className={styles.header}>
      <a href="#" className={styles.logo}>
        squadhelp
      </a>
      <button onClick={onSwitch} className={styles['header-button']}>
        {switchBtn === false ? (
          <Link to="signup">Signup</Link>
        ) : (
          <Link to="login">Login</Link>
        )}
      </button>
    </div>
  );
};

export default Header;
