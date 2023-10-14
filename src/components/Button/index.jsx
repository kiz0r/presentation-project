import styles from './Button.module.scss'
import { motion } from 'framer-motion'

const Button = ({ onClick, style, children, type, restProps }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={styles.btn}
      style={style}
      onClick={onClick}
      type={type || 'button'}
      {...restProps}
    >
      {children}
    </motion.button>
  )
}

export default Button
