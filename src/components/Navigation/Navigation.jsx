import styles from './Navigation.module.scss';
import icon from '../../assets/logo.png';
import burger from '../../assets/burger.svg';
import Botton from '../Botton/Botton';
import BurgerHeader from '../BurgerHeader/BurgerHeader';

function Navigation({burgerMenu, handleBurger}) {
  return (
    <nav className={styles.wrapper}>
      <img className={styles.icon} src={icon} alt='spacex-icon' />
      <ul className={styles.bottons}>
        <Botton name='Главная' />
        <Botton name='Технология' />
        <Botton name='График полетов' />
        <Botton name='Гарантии' />
        <Botton name='О компании' />
      </ul>
      <img className={styles.burger} src={burger} alt='Меню' onClick={handleBurger} />
      <BurgerHeader handleBurger={handleBurger} burgerMenu={burgerMenu} />
    </nav>
  )
}

export default Navigation;