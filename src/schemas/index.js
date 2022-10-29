import * as yup from 'yup';

export const LOGIN_SCHEMA = yup.object({
  email: yup.string().email('Incorrect email').required('Please enter email'),
  pass: yup
    .string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      'Password does not meet minimal requirements'
    )
    .required('Please enter password'),
  remember: yup.boolean()
});

export const SIGNUP_SCHEMA = yup.object({
  firstName: yup
    .string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('First name required'),
  lastName: yup
    .string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Last name required'),
  displayName: yup
    .string()
    .min(5, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Display name required'),
  email: yup.string().email('Incorrect email').required('Email required'),
  pass: yup
    .string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      'Password does not meet minimal requirements'
    )
    .required('Please enter password'),
  passConfirm: yup
    .string()
    .oneOf([yup.ref('pass'), null], 'Passwords must match')
    .required('Please re-enter password'),
  userType: yup
    .string()
    .oneOf(['buyer', 'seller'])
    .required('Please select one'),
  allowSendOffers: yup.boolean()
});
