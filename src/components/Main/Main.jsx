import React from 'react';
import styles from './Main.module.scss';
import mars from '../../assets/mars.png';
import rocket from '../../assets/rocket.png';
import Block from '../Block/Block';

function Main() {
  const [start, setStart] = React.useState(false);

  return (
    <section className={styles.main}>
      <div className={styles.text}>
        <h1 className={styles.title}>ПУТЕШЕСТВИЕ</h1>
        <h2 className={styles.subtitle}>на красную планету</h2>
        <button className={styles.button} onClick={() => setStart(!start)}>Начать путешествие</button>
      </div>
      <div className={styles.images}>
        <img className={styles.mars} alt='Марс' src={mars} />
        <img className={start? styles.rocket_start : styles.rocket} alt='Ракета' src={rocket} />
      </div>
      <div className={styles.info}>
        <Block 
          titleOne='мы' 
          value='1' 
          titleTwo='на рынке'
        />
        <Block 
          titleOne='гарантируем' 
          value='50%' 
          titleTwo='безопасность'
        />
        <Block 
          titleOne='календарик за' 
          value='2001'
          titleTwo='в подарок'
        />
        <Block 
          titleOne='путешествие' 
          value='597'
          titleTwo='дней'
        />
      </div>
    </section>
  )
}

export default Main;