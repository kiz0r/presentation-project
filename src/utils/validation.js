import * as yup from 'yup';

// const NAME_VALIDATION_SCHEMA = yup
//   .string()
//   .required()
//   .min(5, 'Name must be at least 5 characters')
//   .max(16, 'Name must be at most 16 characters')
//   .lowercase('Name should contain only lowercase letters')
//   .required('Please enter your name');

// const EMAIL_VALIDATION_SCHEMA = yup
//   .string()
//   .email()
//   .required('Please enter your email');

const NAME_VALIDATION_SCHEMA = yup
  .string()
  .required()
  .min(5, 'nameMinError')
  .max(16, 'nameMaxError')
  .lowercase('nameLowercaseError')
  .required('nameRequiredError');

const PHONE_VALIDATION_SCHEMA = yup
  .string()
  .matches(/^\+(380|420)\d{9}$/, 'phoneMatchesError')
  .required('phoneRequiredError');

const EMAIL_VALIDATION_SCHEMA = yup
  .string()
  .email()
  .required('emailRequiredError');

export const CONTACT_FORM_VALIDATION_SCHEMA = yup.object({
  userName: NAME_VALIDATION_SCHEMA,
  phone: PHONE_VALIDATION_SCHEMA,
  email: EMAIL_VALIDATION_SCHEMA,
});
