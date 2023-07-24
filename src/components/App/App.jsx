import styles from './App.module.scss';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';
import React from 'react';

function App() {
  const [burgerMenu, setBurgerMenu] = React.useState(false);

  function handleBurger() {
    setBurgerMenu(!burgerMenu);
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Navigation handleBurger={handleBurger} burgerMenu={burgerMenu} />
      </div>
      <Main />
    </div>
  )
}

export default App;
