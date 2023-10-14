import { useTranslation } from 'react-i18next'
import ContactForm from '../ContactForm'
import laptopImg from '../../common/images/laptop.png'

import styles from './ContactMe.module.scss'

const ContactMe = () => {
  const { t } = useTranslation()

  return (
    <section id='feedBack' className={styles.contactMeSection}>
      <h2>{t('contactMeSection')}</h2>
      <div className={styles.contentWrapper}>
        <ContactForm />
        <img src={laptopImg} alt='laptop' />
      </div>
    </section>
  )
}

export default ContactMe
