import styles from './Button.module.scss'
import { motion } from 'framer-motion'

const Button = ({ onClick, style, children, restProps }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={styles.btn}
      style={style}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </motion.button>
  )
}

export default Button
