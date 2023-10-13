// todo : create footer
import { useTranslation } from 'react-i18next'
import { SOCIAL, CONTACTS } from '../../constants.jsx'

import styles from './Footer.module.scss'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>
      <div className={styles.schedule}>
        <span>{t('workDays')}</span>
        <span>{t('weekEnd')}</span>
      </div>

      <ul className={styles.social}>
        {CONTACTS.map(contact => (
          <li key={contact.href}>
            <a className={styles.socialLink} href={contact.href}>
              {contact.contact}
            </a>
          </li>
        ))}
      </ul>

      <ul className={styles.social}>
        {SOCIAL.map(social => (
          <li key={social.title}>
            <a target='_blank' href={social.href} className={styles.socialLink}>
              <div>{social.icon}</div>
              {social.title}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
