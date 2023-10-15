import { Field, useField } from 'formik'
import { useTranslation } from 'react-i18next'

import styles from './FormInput.module.scss'

const FormInput = ({ name, label, ...restProps }) => {
  const { t } = useTranslation()
  return (
    <Field name={name}>
      {({ field, form: { errors, touched }, meta }) => {
        return (
          <label className={styles.formLabel}>
            {label && <span>{label}</span>}
            <input {...restProps} {...field} className={styles.formInput} />
            {meta.error && meta.touched && <div>{t(meta.error)}</div>}
          </label>
        )
      }}
    </Field>
  )
}

const FormTextArea = ({ label, ...restProps }) => {
  const [field, meta] = useField(restProps)
  const { t } = useTranslation()

  return (
    <label className={styles.formLabel}>
      {label && <span>{label}</span>}
      <textarea {...field} {...restProps} className={styles.formInput} />
      {meta.error && meta.touched && <div>{t(meta.error)}</div>}
    </label>
  )
}

const FormSelect = ({ label, ...restProps }) => {
  const [field, meta] = useField(restProps)
  const { t } = useTranslation()

  return (
    <label className={styles.formLabel}>
      {label && <span>{label}</span>}
      <select {...field} {...restProps} className={styles.formInput} />
      {meta.error && meta.touched && <div>{t(meta.error)}</div>}
    </label>
  )
}

export { FormInput, FormTextArea, FormSelect }
