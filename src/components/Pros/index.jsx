import { useTranslation } from 'react-i18next'
import HorizontalLine from '../HorizontalLine'
import { PROS } from '../../constants'

import styles from './Pros.module.scss'

const Pros = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.prosSection}>
      {PROS.map(p => (
        <div key={p.title} className={styles.prosContainer}>
          <h3 className={styles.title}>{t(p.title)}</h3>
          <HorizontalLine />
          <p className={styles.body}>{t(p.body)}</p>
        </div>
      ))}
    </section>
  )
}

export default Pros
