import { useTranslation } from 'react-i18next'
import Nav from '../Nav'
import LanguageSelect from '../LanguageSelect'
import styles from './Header.module.scss'

const { header, myNameSpan } = styles

const Header = () => {
  const { t } = useTranslation()

  return (
    <header className={header}>
      <span className={myNameSpan}>{t('creatorName')}</span>
      <Nav />
      <LanguageSelect />
    </header>
  )
}

export default Header
