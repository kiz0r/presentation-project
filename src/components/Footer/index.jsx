import { useTranslation } from 'react-i18next'
import { SOCIAL, CONTACTS } from '../../utils/constants'

import styles from './Footer.module.scss'
import List from '../List/index.jsx'
import Wrapper from '../Wrapper/index.jsx'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>
      <Wrapper>
        <div className={styles.schedule}>
          <span>{t('workDays')}</span>
          <span>{t('weekEnd')}</span>
        </div>

        <List
          items={CONTACTS}
          keyProp='href'
          linkProp='href'
          textProp='contact'
        />

        <List
          items={SOCIAL}
          keyProp='href'
          linkProp='href'
          textProp='title'
          iconProp='icon'
        />
      </Wrapper>
    </footer>
  )
}

export default Footer
