import styles from './Wrapper.module.scss'

const Wrapper = ({ className, children }) => {
  return (
    <div className={className ? className : styles.wrapper}>{children}</div>
  )
}

export default Wrapper
