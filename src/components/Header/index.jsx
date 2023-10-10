import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import '../../locale'

const Header = () => {
  const { t } = useTranslation()
  const langChangeHandler = ({ target: { value } }) => {
    i18n.changeLanguage(value)
  }
  return (
    <header>
      <span>{t('creatorName')}</span>

      <select onChange={langChangeHandler}>
        <option value='en'>English</option>

        <option value='ru'>Russian</option>
      </select>
    </header>
  )
}

export default Header
