import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

const LANGUAGES = ['ru', 'en'];

const Header = () => {
  const { t } = useTranslation();
  const langChangeHandler = ({ target: { value } }) => {
    i18n.changeLanguage(value);
  };

  const currentLanguage = i18n.language;

  return (
    <header>
      <span>{t('creatorName')}</span>

      <select onChange={langChangeHandler} defaultValue={currentLanguage}>
        {LANGUAGES.map(lang => (
          <option key={lang} value={lang}>
            {t(lang)}
          </option>
        ))}
      </select>
    </header>
  );
};

export default Header;
