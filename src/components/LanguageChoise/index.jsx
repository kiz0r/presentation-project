import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import i18n from 'i18next'
import { BiSolidDownArrow } from 'react-icons/bi'
import { LANGUAGES } from '../../constants'
import styles from './LanguageChoise.module.scss'

const { languageButton, languageOption } = styles

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.7
    }
  },
  closed: {
    opacity: 0,
    y: 10,
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.3
    }
  }
}

const ulVariants = {
  open: {
    clipPath: 'inset(0% 0% 0% 0% round 10px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05
    }
  },
  closed: {
    clipPath: 'inset(10% 50% 90% 50% round 10px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.3
    }
  }
}

const LanguageChoise = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const langChangeHandler = value => {
    i18n.changeLanguage(value)
    setIsOpen(!isOpen)
  }

  const currentLanguage = i18n.language

  return (
    <div>
      <motion.button
        className={languageButton}
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.97 }}
        value={currentLanguage}
      >
        {t(currentLanguage)}
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          initial='closed'
          animate={isOpen ? 'open' : 'closed'}
          transition={{ duration: 0.2 }}
          style={{
            originY: 0.5
          }}
        >
          <BiSolidDownArrow />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            variants={ulVariants}
            className={languageOption}
            style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
          >
            {LANGUAGES.map(lang => (
              <motion.li
                variants={itemVariants}
                key={lang}
                data-value={lang}
                onClick={() => langChangeHandler(lang)}
              >
                {t(lang)}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LanguageChoise
