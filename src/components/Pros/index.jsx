import { useTranslation } from 'react-i18next'
import { animate, motion } from 'framer-motion'

import { PROS } from '../../constants'

import styles from './Pros.module.scss'

const Pros = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.prosSection}>
      {PROS.map(p => (
        <div key={p.title} className={styles.prosContainer}>
          <h3 className={styles.title}>{t(p.title)}</h3>
          <motion.div
            className={styles.horLine}
            initial={{ width: 0 }}
            animate={{ width: '60%' }}
            transition={{ delay: 1, duration: 1 }}
          ></motion.div>
          <p className={styles.body}>{t(p.body)}</p>
        </div>
      ))}
    </section>
  )
}

export default Pros
