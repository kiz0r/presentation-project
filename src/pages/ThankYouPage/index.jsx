import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Button from '../../components/Button'

import styles from './ThankYouPage.module.scss'

const ThankYouPage = () => {
  const { t } = useTranslation()

  const buttonRedirect = () => {
    window.location.replace('/')
  }

  return (
    <section className={styles.thankYou}>
      <div className={styles.textContainer}>
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ opacity: 1, scale: [1, 1.2, 1] }}
          transition={{ duration: 1, delay: 0.5, times: [0, 0.7, 1] }}
        >
          {t('thankForContacting')}
        </motion.h1>
        <p>{t('iWillContactYou')}</p>
      </div>

      <div className={styles.btnContainer}>
        <Button onClick={buttonRedirect}>{t('backToMain')}</Button>
      </div>
    </section>
  )
}

export default ThankYouPage
