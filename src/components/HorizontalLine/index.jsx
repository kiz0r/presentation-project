import { motion } from 'framer-motion'

import styles from './HorizontalLine.module.scss'

const horizontalLineVariants = {
  visible: {
    opacity: 1,
    width: '60%'
  },
  hidden: {
    opacity: 0,
    width: 0
  }
}

const HorizontalLine = () => {
  return (
    <motion.div
      className={styles.horLine}
      variants={horizontalLineVariants}
      transition={{ delay: 1, duration: 1 }}
      viewport={{ amount: 0.5 }}
    />
  )
}

export default HorizontalLine
