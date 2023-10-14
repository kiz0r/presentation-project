import { Form, Formik } from 'formik'
import { useTranslation } from 'react-i18next'
import { CONTACT_FORM_VALIDATION_SCHEMA } from '../../utils/validation'
import FormInput from '../FormInput'
import Button from '../Button'

import styles from './ContactForm.module.scss'

const ContactForm = () => {
  const { t } = useTranslation()

  const contactFormInitialValues = {
    userName: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  }

  const handleSubmit = (values, formikBag) => {
    console.log('values :>>', values)
    formikBag.resetForm()
  }

  return (
    <Formik
      initialValues={contactFormInitialValues}
      onSubmit={handleSubmit}
      validationSchema={CONTACT_FORM_VALIDATION_SCHEMA}
    >
      <Form className={styles.contactForm}>
        <FormInput placeholder={t('formName')} name='userName' type='text' />
        <FormInput placeholder={t('formPhone')} name='phone' type='phone' />
        <FormInput placeholder={t('formEmail')} name='email' type='email' />
        <FormInput
          placeholder={t('formMessage')}
          name='message'
          type='textarea'
        />
        <Button type='submit'>{t('submit')}</Button>
      </Form>
    </Formik>
  )
}

export default ContactForm
