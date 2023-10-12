import { useTranslation } from 'react-i18next'
import styles from './AboutMe.module.scss'

const AboutMe = () => {
  const { t } = useTranslation()
  return (
    <section id='aboutMe' className={styles.aboutMe}>
      <p>{t('aboutMeTextLeft')}</p>
      <p>{t('aboutMeTextRight')}</p>
    </section>
  )
}

export default AboutMe
