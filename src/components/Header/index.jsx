import { useTranslation } from 'react-i18next'
import Button from '../Button'
import Nav from '../Nav'
import LanguageSelect from '../LanguageSelect'
import styles from './Header.module.scss'

const Header = () => {
  const { t } = useTranslation()

  const pageReloadHandler = () => {
    window.location.replace('/')
  }

  return (
    <header className={styles.header}>
      <Button onClick={pageReloadHandler}>{t('creatorName')}</Button>
      <Nav />
      <LanguageSelect />
    </header>
  )
}

export default Header
