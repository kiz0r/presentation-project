import { FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa'

const email = 'kkhomenko10@gmail.com'
const phoneUA = '+380 50 013 97 00'
const phoneCZ = '+420 722 738 211'

export const LANGUAGES = ['ru', 'en']

export const NAV_CONTENT = ['aboutMe', 'services', 'skills', 'feedBack']

export const CONTACTS = [
  {
    contact: email,
    href: `mailto:${email}`
  },
  {
    contact: '+380 50 013 97 00',
    href: `tel:${phoneUA.replace(/\s/g, '')}`
  },
  {
    contact: '+420 722 738 211',
    href: `tel:${phoneCZ.replace(/\s/g, '')}`
  }
]

export const SOCIAL = [
  {
    title: 'GitHub',
    href: 'https://www.github.com/kiz0r',
    icon: <FaGithub />
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/khomenkokyrylo',
    icon: <FaLinkedin />
  },
  {
    title: 'Telegram',
    href: 'https://www.telegram.me/kiz0r',
    icon: <FaTelegram />
  }
]

export const SKILLS = [
  {
    field: 'programming',
    skills: [
      'React.js',
      'JavaScript/TypeScript',
      'GIT',
      'Node.js',
      'MongoDB',
      'Docker',
      'CSS (SASS/SCSS)',
      'BEM'
    ]
  },
  {
    field: 'education',
    skills: ['freshcode', 'khai', 'cvut']
  },
  {
    field: 'languages',
    skills: ['ukrainian', 'russian', 'english', 'czech']
  }
]
