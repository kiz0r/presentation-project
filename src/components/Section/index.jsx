import { motion } from 'framer-motion'
import { forwardRef } from 'react'

import styles from './Section.module.scss'

const Section = forwardRef(({ className, id, children }, ref) => {
  return (
    <section
      ref={ref}
      id={id}
      className={`${styles.section} ${className ? className : null}`}
    >
      {children}
    </section>
  )
})

export default Section

export const MSection = motion(Section)
