import styles from './Button.module.scss'

const Button = ({ onClick, children, restProps }) => {
  return (
    <button className={styles.btn} onClick={onClick} {...restProps}>
      {children}
    </button>
  )
}

export default Button
