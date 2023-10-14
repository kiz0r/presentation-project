import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import styles from './HorizontalLine.module.scss'

const HorizontalLine = () => {
  const [ref, inView] = useInView({
    triggerOnce: true
  })

  return (
    <motion.div
      className={styles.horLine}
      initial={{ width: 0 }}
      animate={{ width: inView ? '60%' : 0 }}
      transition={{ delay: 1, duration: 1 }}
      ref={ref}
    />
  )
}

export default HorizontalLine
