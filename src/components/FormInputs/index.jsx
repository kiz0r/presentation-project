import { Field, useField } from 'formik'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'

import styles from './FormInput.module.scss'

const setClasses = (meta, styles) =>
  clsx(styles.formInput, {
    [styles.invalid]: meta.error && meta.touched,
    [styles.valid]: !meta.error && !meta.touched
  })

const FormInput = ({ name, label, ...restProps }) => {
  const { t } = useTranslation()

  return (
    <Field name={name}>
      {({ field, form: { errors, touched }, meta }) => {
        const inputClassname = setClasses(meta, styles)
        return (
          <label className={styles.formLabel}>
            {label && <span>{label}</span>}
            <input {...restProps} {...field} className={inputClassname} />
            {meta.error && meta.touched && (
              <div className={styles.errorBox}>{t(meta.error)}</div>
            )}
          </label>
        )
      }}
    </Field>
  )
}

const FormTextArea = ({ label, ...restProps }) => {
  const [field, meta] = useField(restProps)
  const { t } = useTranslation()
  const inputClassname = setClasses(meta, styles)

  return (
    <label className={styles.formLabel}>
      {label && <span>{label}</span>}
      <textarea {...field} {...restProps} className={inputClassname} />
      {meta.error && meta.touched && <div>{t(meta.error)}</div>}
    </label>
  )
}

const FormSelect = ({ label, ...restProps }) => {
  const [field, meta] = useField(restProps)
  const { t } = useTranslation()
  const inputClassname = setClasses(meta, styles)

  return (
    <label className={styles.formLabel}>
      {label && <span>{label}</span>}
      <select {...field} {...restProps} className={inputClassname} />
      {meta.error && meta.touched && <div>{t(meta.error)}</div>}
    </label>
  )
}

export { FormInput, FormTextArea, FormSelect }
