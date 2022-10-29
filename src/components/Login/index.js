import { Formik, Form, Field } from 'formik';
import { LOGIN_SCHEMA } from '../../schemas';
import MyField from '../MyField';
import Button from '../UI/Button';
import styles from './Login.module.css';

const initialState = {
  email: '',
  pass: '',
  remember: false
};

const Login = () => {
  const onFormikSubmit = (values, actions) => {
    console.log(values);
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
              <div className={styles['login-form__additional_controls']}>
                <label>
                  <Field type="checkbox" name="remember" />
                  Remember Me
                </label>
                <a href="#">Forgot Password</a>
              </div>
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
