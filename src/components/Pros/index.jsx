import { useTranslation } from 'react-i18next'
import { MSection } from '../Section'
import HorizontalLine from '../HorizontalLine'
import Wrapper from '../Wrapper'
import { PROS } from '../../utils/constants'

import styles from './Pros.module.scss'

const Pros = () => {
  const { t } = useTranslation()

  return (
    <MSection
      initial='hidden'
      whileInView='visible'
      className={styles.prosSection}
    >
      <Wrapper className={styles.wrapper}>
        {PROS.map(p => (
          <div key={p.title} className={styles.prosContainer}>
            <h3 className={styles.title}>{t(p.title)}</h3>
            <HorizontalLine />
            <p className={styles.body}>{t(p.body)}</p>
          </div>
        ))}
      </Wrapper>
    </MSection>
  )
}

export default Pros
