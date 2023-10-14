import { useTranslation } from 'react-i18next'
import { SKILLS } from '../../constants'

import styles from './Skills.module.scss'

const Skills = () => {
  const { t } = useTranslation()
  return (
    <section id='skills' className={styles.skillSection}>
      {SKILLS.map(fieldSkills => (
        <div key={fieldSkills.field} className={styles.skillBox}>
          <p className={styles.skillHeadline}>{t(fieldSkills.field)}</p>
          <ul className={styles.skillsList}>
            {fieldSkills.skills.map(skill => (
              <li key={skill}>{t(skill)}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default Skills