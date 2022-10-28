// import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { LOGIN_SCHEMA } from '../../schemas';
import Button from '../UI/Button';
import styles from './Login.module.css';

const initialState = {
  email: '',
  pass: ''
};

const Login = () => {
  /*const [emailIsValid, setEmailValid] = useState(null);

   useEffect(() => {
    const timerId = setTimeout(() => {
      console.log('useEffect check form validity');

      setEmailValid();
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [emailIsValid]);

  const emailValidate = email => {
    let error;
    if (!/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(email)) {
      error = 'Invalid email address';
    }
    return error;
  }; */

  const onFormikSubmit = (values, actions) => {
    alert(
      `Welcome back!\nEntered email: ${values.email}\nEntered password: ${values.pass}`
    );
    actions.resetForm();
  };

  const ErrorMsg = ({ children }) => {
    return <div className={styles['error-msg']}>{children}</div>;
  };

  const loginModalClass = `${styles['login-modal']} animate__animated animate__backInDown`;
  const errorClass = `${styles.error} animate__animated animate__shakeX`;

  return (
    <div className={loginModalClass}>
      <h2>LOGIN TO YOUR ACCOUNT</h2>
      <Formik
        initialValues={initialState}
        onSubmit={onFormikSubmit}
        validationSchema={LOGIN_SCHEMA}
      >
        {({ errors, touched, isValid, dirty }) => {
          return (
            <Form className={styles['login-form']}>
              <Field
                name="email"
                placeholder="user@mail.com"
                className={touched.email && errors.email && errorClass}
              />
              <ErrorMessage name="email" component={ErrorMsg} />
              <Field
                name="pass"
                placeholder="password"
                className={touched.pass && errors.pass && errorClass}
              />
              <ErrorMessage name="pass" component={ErrorMsg} />
              <Button
                type="submit"
                isDisabled={!(dirty && isValid)}
                disabled={!(dirty && isValid)}
              >
                Login
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
