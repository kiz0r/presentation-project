import { useTranslation } from 'react-i18next'
import Wrapper from '../Wrapper'
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
      <Wrapper className={styles.wrapper}>
        <Button onClick={pageReloadHandler}>{t('creatorName')}</Button>
        <Nav />
        <LanguageSelect />
      </Wrapper>
    </header>
  )
}

export default Header
