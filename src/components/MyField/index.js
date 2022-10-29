import { ErrorMessage, useField } from 'formik';
import cx from 'classnames';
import styles from './MyField.module.css';

const MyField = props => {
  const [field, meta] = useField(props);

  const ErrorMsg = ({ children }) => {
    return <div className={styles['error-msg']}>{children}</div>;
  };

  const errorClass = cx(
    styles.input,
    meta.touched &&
      meta.error && [styles.error, 'animate__animated', 'animate__shakeX']
  );

  return (
    <div className={styles['input-wrapper']}>
      <input {...field} {...props} className={errorClass} />
      <ErrorMessage name={props.name} component={ErrorMsg} />
    </div>
  );
};

export default MyField;
