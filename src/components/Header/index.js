import styles from './Header.module.css';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';

const Header = ({ onSwitch, switchBtn }) => {
  return (
    <div className={styles.header}>
      <a href="#" className={styles.logo}>
        squadhelp
      </a>
      <Button onClick={onSwitch}>
        {switchBtn === false ? (
          <Link to="signup">Signup</Link>
        ) : (
          <Link to="login">Login</Link>
        )}
      </Button>
    </div>
  );
};

export default Header;
