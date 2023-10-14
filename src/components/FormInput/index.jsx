import { Field } from 'formik'

import styles from './FormInput.module.scss'

const FormInput = ({ name, label, ...restProps }) => {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched }, meta }) => {
        // const inputClassName = classNames(classes.input, {
        //   [classes.valid]: !meta.error && meta.touched,
        //   [classes.invalid]: meta.error && meta.touched
        // })

        return (
          // className={classes.label}
          <label>
            {label && <span>{label}</span>}
            <input {...restProps} {...field} className={styles.formInput} />
            {meta.error && meta.touched && <div>{meta.error}</div>}
          </label>
        )
      }}
    </Field>
  )
}

export default FormInput
