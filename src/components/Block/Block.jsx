import styles from './Block.module.scss';

function Block({titleOne, value, titleTwo}) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{titleOne}</p>
      <p className={styles.value}>{value}</p>
      <p className={styles.title}>{titleTwo}</p>
    </div>
  )
}

export default Block;