import styles from './Login.module.css';
import cx from 'classnames';

const Login = () => {
  const classes = cx(
    styles['login-modal'],
    'animate__animated',
    'animate__backInDown'
  );

  return <div className={classes}>Login</div>;
};

export default Login;
