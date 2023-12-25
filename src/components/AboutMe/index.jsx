import { useTranslation } from 'react-i18next'
import Section from '../Section'
import Wrapper from '../Wrapper'
import styles from './AboutMe.module.scss'

const AboutMe = () => {
  const { t } = useTranslation()
  return (
    <Section id='aboutMe'>
      <Wrapper className={styles.wrapper}>
        <h2>{t('aboutMe')}</h2>
        <p className={styles.text}>{t('aboutMeTextLeft')}</p>
        <p className={styles.text}>{t('aboutMeTextRight')}</p>
      </Wrapper>
    </Section>
  )
}

export default AboutMe
