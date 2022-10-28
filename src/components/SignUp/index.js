import styles from './SignUp.module.css';
import cx from 'classnames';

const SignUp = () => {
  const classes = cx(
    styles['signup-modal'],
    'animate__animated',
    'animate__backInUp'
  );
  return <div className={classes}>SignUp</div>;
};

export default SignUp;
