import { useTranslation } from 'react-i18next'
import i18n from 'i18next'
import '../../locale'

const SELECT = [
  {
    key: 'ru',
    value: 'Russian'
  },
  {
    key: 'en',
    value: 'English'
  }
]

const Header = () => {
  const { t } = useTranslation()
  const langChangeHandler = ({ target: { value } }) => {
    i18n.changeLanguage(value)
  }
  return (
    <header>
      <span>{t('creatorName')}</span>

      <select onChange={langChangeHandler}>
        {SELECT.map(lang => (
          <option key={lang.key} value={lang.key}>
            {t(lang.value)}
          </option>
        ))}
        {/* <option value='en'>English</option>

        <option value='ru'>Russian</option> */}
      </select>
    </header>
  )
}

export default Header
