import styles from './Botton.module.scss';

function Botton({name}) {

  return (
    <li className={styles.botton}>
      <a href='#' className={styles.botton__link}>{name}</a>
    </li>
  )
}

export default Botton;