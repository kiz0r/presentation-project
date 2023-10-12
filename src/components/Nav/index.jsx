import { useTranslation } from 'react-i18next'
import { NAV_CONTENT } from '../../constants'
import styles from './Nav.module.scss'

const Nav = () => {
  const { t } = useTranslation()

  return (
    <nav className={styles.navigationPanel}>
      {NAV_CONTENT.map(l => (
        <a className={styles.navLink} key={l} href={`#${l}`}>
          {t(l)}
        </a>
      ))}
    </nav>
  )
}

export default Nav
