import styles from './List.module.scss'

const List = ({ items, keyProp, linkProp, textProp, iconProp }) => {
  return (
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item[keyProp]}>
          <a href={item[linkProp]} className={styles.listItemLink}>
            {iconProp && <div>{item[iconProp]}</div>}
            {item[textProp]}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default List
