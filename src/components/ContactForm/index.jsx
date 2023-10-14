import { Form, Formik } from 'formik'
import { useTranslation } from 'react-i18next'
import { CONTACT_FORM_VALIDATION_SCHEMA } from '../../utils/validation'
import { FormInput, FormTextArea, FormSelect } from '../FormInputs'
import Button from '../Button'

import styles from './ContactForm.module.scss'
import { CATEGORIES } from '../../utils/constants'

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
      {({ isValid, dirty }) => (
        <Form className={styles.contactForm}>
          <div className={styles.formRow}>
            <FormInput
              placeholder={t('formName')}
              name='userName'
              type='text'
            />
            <FormInput placeholder={t('formPhone')} name='phone' type='phone' />
          </div>
          <div className={styles.formRow}>
            <FormInput placeholder={t('formEmail')} name='email' type='email' />
            <FormSelect name='category'>
              <option value='' disabled defaultValue>
                {t('selectCategory')}
              </option>
              {CATEGORIES.map(c => (
                <option key={c} value={c}>
                  {t(c)}
                </option>
              ))}
            </FormSelect>
          </div>
          <div className={styles.formRow}>
            <FormTextArea
              placeholder={t('formMessage')}
              name='message'
              rows={8}
            />
          </div>

          <Button type='submit' disabled={!isValid || !dirty}>
            {t('submit')}
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm
