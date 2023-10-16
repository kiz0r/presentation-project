import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Header from '../Header'
import Button from '../Button'
import myPhoto from '../../common/images/myPhoto.png'
import styles from './FrontSection.module.scss'

const FrontSection = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className={styles.bg}></div>
      <section className={styles.contentWrapper}>
        <motion.h2
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.headlineAddition}
        >
          Full-stack
        </motion.h2>
        <motion.h1
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={styles.headline}
        >
          Web Developer
        </motion.h1>
        <img className={styles.myPhoto} src={myPhoto} alt='my photo' />

        <Button>{t('makeAnOrder')}</Button>
      </section>
    </>
  )
}

export default FrontSection
