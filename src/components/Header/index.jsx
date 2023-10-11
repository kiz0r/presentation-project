import { useTranslation } from 'react-i18next';
import LanguageChoise from '../LanguageChoise';
import styles from './Header.module.scss';

const { header, myNameSpan } = styles;

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className={header}>
      <span className={myNameSpan}>{t('creatorName')}</span>

      <LanguageChoise />
    </header>
  );
};

export default Header;
