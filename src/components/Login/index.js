// import { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import { LOGIN_SCHEMA } from '../../schemas';
import MyField from '../MyField';
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

  const loginModalClass = `${styles['login-modal']} animate__animated animate__backInDown`;

  return (
    <div className={loginModalClass}>
      <h2>LOGIN TO YOUR ACCOUNT</h2>
      <Formik
        initialValues={initialState}
        onSubmit={onFormikSubmit}
        validationSchema={LOGIN_SCHEMA}
      >
        {({ isValid, dirty }) => {
          return (
            <Form className={styles['login-form']}>
              <MyField name="email" placeholder="user@mail.com" />
              <MyField name="pass" placeholder="password" />
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
