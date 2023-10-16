import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlus } from 'react-icons/fa'

const ServicesSites = () => {
  const sites = [
    {
      type: 'landing',
      desctiption: 'Some text',
      price: '1$',
      exampleLink: 'www.google.com'
    },
    {
      type: 'business',
      desctiption: 'Some text 2',
      price: '10$',
      exampleLink: 'www.google.com'
    }
  ]

  return (
    <>
      {sites.map(site => {
        const [isOpen, setIsOpen] = useState(false)

        const siteOpenHandler = () => {
          setIsOpen(!isOpen)
        }
        return (
          <motion.div key={site.type}>
            <div>
              <p>{site.type}</p>
              <motion.div
                style={{ width: 'max-content' }}
                variants={{
                  open: { rotate: 45 },
                  closed: { rotate: 0 }
                }}
                initial='closed'
                animate={isOpen ? 'open' : 'closed'}
                transition={{ duration: 0.2 }}
                onClick={siteOpenHandler}
                whileTap={{ scale: 0.97 }}
              >
                <FaPlus />
              </motion.div>
            </div>
            <AnimatePresence>
              {isOpen && <span>{site.desctiption}</span>}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </>
  )
}

export default ServicesSites
