import * as yup from 'yup';

const NAME_VALIDATION_SCHEMA = yup
  .string()
  .required()
  .min(4, 'nameMinError')
  .max(16, 'nameMaxError')
  .required('requiredError');

const PHONE_VALIDATION_SCHEMA = yup
  .string()
  .matches(/^\+(380|420)\d{9}$/, 'phoneMatchesError')
  .required('requiredError');

const EMAIL_VALIDATION_SCHEMA = yup
  .string()
  .email('emailValidError')
  .required('requiredError');

export const CONTACT_FORM_VALIDATION_SCHEMA = yup.object({
  userName: NAME_VALIDATION_SCHEMA,
  phone: PHONE_VALIDATION_SCHEMA,
  email: EMAIL_VALIDATION_SCHEMA,
});
