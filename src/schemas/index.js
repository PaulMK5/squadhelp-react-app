import * as yup from 'yup';

export const LOGIN_SCHEMA = yup.object({
  email: yup.string().email('Incorrect email').required('Please enter email'),
  pass: yup
    .string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      'Password does not meet minimal requirements'
    )
    .required('Please enter password')
});
