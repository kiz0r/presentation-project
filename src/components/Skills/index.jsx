import { useTranslation, Trans } from 'react-i18next'
import { SKILLS } from '../../utils/constants'

import Section from '../Section'
import Wrapper from '../Wrapper'

import styles from './Skills.module.scss'

const Skills = () => {
  const { t } = useTranslation()
  return (
    // <section id='skills' className={styles.skillSection}>
    <Section id='skills'>
      <Wrapper className={styles.wrapper}>
        <h2>{t('skills')}</h2>
        <div className={styles.skillsContainer}>
          {SKILLS.map(fieldSkills => (
            <div key={fieldSkills.field} className={styles.skillBox}>
              <p className={styles.skillHeadline}>{t(fieldSkills.field)}</p>
              <ul className={styles.skillsList}>
                {fieldSkills.skills.map(skill => (
                  <li key={skill}>
                    <Trans components={{ br: <br /> }}>{skill}</Trans>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Wrapper>
    </Section>
  )
}

export default Skills
