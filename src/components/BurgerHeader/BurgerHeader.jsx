// компонент бургерного меню
import styles from './BurgerHeader.module.scss';
import Botton from '../Botton/Botton';

const BurgerHeader = ({ burgerMenu, handleBurger }) => {
  return ( 
    <div className={`${ burgerMenu ? styles.burger_active: styles.burger }`}>
      <div className={styles.burger__wrapper}>
        <button className={styles.burger__closebutton} onClick={handleBurger}/>
        <nav className={styles.burger__navigation}>
          <Botton name='Главная' />
          <Botton name='Технология' />
          <Botton name='График полетов' />
          <Botton name='Гарантии' />
          <Botton name='О компании' />
        </nav>
      </div>
    </div>
  )
}

export default BurgerHeader;