import cx from 'classnames';
import styles from './Button.module.css';

const Button = ({ onClick, children, isDisabled, ...props }) => {
  const classes = cx({
    [styles.button]: true,
    [styles.disabled]: isDisabled
  });

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
