import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import HorizontalLine from '../HorizontalLine'
import { PROS } from '../../utils/constants'

import styles from './Pros.module.scss'

const Pros = () => {
  const { t } = useTranslation()

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      className={styles.prosSection}
    >
      {PROS.map(p => (
        <div key={p.title} className={styles.prosContainer}>
          <h3 className={styles.title}>{t(p.title)}</h3>
          <HorizontalLine />
          <p className={styles.body}>{t(p.body)}</p>
        </div>
      ))}
    </motion.section>
  )
}

export default Pros
