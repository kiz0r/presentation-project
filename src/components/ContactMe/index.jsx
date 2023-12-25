import { useTranslation } from 'react-i18next'
import ContactForm from '../ContactForm'
import Section from '../Section'
import Wrapper from '../Wrapper'
import laptopImg from '../../common/images/laptop.png'

import styles from './ContactMe.module.scss'

const ContactMe = () => {
  const { t } = useTranslation()

  return (
    <Section id='feedBack'>
      <Wrapper className={styles.wrapper}>
        <h2>{t('contactMeSection')}</h2>
        <div className={styles.contentWrapper}>
          <ContactForm />
          <img src={laptopImg} alt='laptop' />
        </div>
      </Wrapper>
    </Section>
  )
}

export default ContactMe
