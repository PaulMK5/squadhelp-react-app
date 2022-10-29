import { Formik, Form, Field, ErrorMessage } from 'formik';
import MyField from '../MyField';
import cx from 'classnames';
import styles from './SignUp.module.css';
import { SIGNUP_SCHEMA } from '../../schemas';
import Button from '../UI/Button';

const initialState = {
  firstName: '',
  lastName: '',
  displayName: '',
  email: '',
  pass: '',
  passConfirm: '',
  userType: '',
  allowSendOffers: false
};

const SignUp = () => {
  const signUpModalClass = cx(
    styles['signup-modal'],
    'animate__animated',
    'animate__backInUp'
  );

  const submitHandler = (values, actions) => {
    console.log(values);
    alert(`Welcome, ${values.displayName}!`);
    actions.resetForm();
  };

  return (
    <div className={signUpModalClass}>
      <h2>CREATE AN ACCOUNT</h2>
      <h3>We always keep your name and email address private.</h3>
      <Formik
        initialValues={initialState}
        validationSchema={SIGNUP_SCHEMA}
        onSubmit={submitHandler}
      >
        {({ errors, touched }) => {
          return (
            <Form className={styles['signup-form']}>
              <div className={styles['signup-form__row']}>
                <MyField name="firstName" placeholder="First name" />
                <MyField name="lastName" placeholder="Last name" />
              </div>
              <div className={styles['signup-form__row']}>
                <MyField name="displayName" placeholder="Display name" />
                <MyField name="email" placeholder="user@mail.com" />
              </div>
              <div className={styles['signup-form__row']}>
                <MyField name="pass" placeholder="Password" />
                <MyField name="passConfirm" placeholder="Confirm password" />
              </div>
              <div
                className={`${styles['signup-form__radio-sel']} ${
                  errors.userType && touched.userType && styles.error
                }`}
              >
                <Field id="buyer" type="radio" name="userType" value="buyer" />
                <label htmlFor="buyer">
                  Join as a Buyer
                  <div>
                    I am looking for a Name, Logo or Tagline for my business,
                    brand or product.
                  </div>
                </label>
              </div>
              <ErrorMessage
                name="userType"
                component={({ children }) => {
                  return <span className={styles.spanErr}>{children}</span>;
                }}
              />
              <div
                className={`${styles['signup-form__radio-sel']} ${
                  errors.userType && touched.userType && styles.error
                }`}
              >
                <Field
                  id="seller"
                  type="radio"
                  name="userType"
                  value="seller"
                />
                <label htmlFor="seller">
                  Join As a Creative or Marketplace Seller
                  <div>
                    I plan to submit name ideas, Logo designs or sell names in
                    Domain Marketplace.
                  </div>
                </label>
              </div>
              <label className={styles['signup-form__offers-chkbx']}>
                <Field type="checkbox" name="allowSendOffers" />
                Allow Squadhelp to send marketing/promotional offers from time
                to time
              </label>
              <Button type="submit">Create account</Button>
              <div className={styles.terms}>
                By clicking this button, you agree to our{' '}
                <a href="#">Terms of Service.</a>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignUp;
