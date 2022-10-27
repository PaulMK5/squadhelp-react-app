import { useState } from 'react';

import styles from './Header.module.css';

const Header = () => {
  const [switchBtn, setSwitch] = useState(false);

  const clickHandler = () => {
    setSwitch(!switchBtn);
  };

  return (
    <div className={styles.header}>
      <a href="#" className={styles.logo}>
        squadhelp
      </a>
      <button onClick={clickHandler} className={styles['header-button']}>
        {switchBtn === false ? 'Signup' : 'Login'}
      </button>
    </div>
  );
};

export default Header;
