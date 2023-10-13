import { useTranslation } from 'react-i18next'
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
        <h1>{t('thankForContacting')}</h1>
        <p>{t('iWillContactYou')}</p>
      </div>

      <div className={styles.btnContainer}>
        <Button onClick={buttonRedirect}>{t('backToMain')}</Button>
      </div>
    </section>
  )
}

export default ThankYouPage
