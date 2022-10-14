import React from 'react';
import styles from './app.module.css';
import { apiBurger } from '../../api';
import { AppHeader } from '../app-header/app-header';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import { Modal } from '../modal/modal';
import OrderDetails from '../order-details/order-details';

export default function App() {
  const [ingredients, setIngredients] = React.useState([]);

  React.useEffect(() => {
    apiBurger.getIngredients()
      .then(({ success, data }) => {
        if (success) {
          setIngredients(data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log(ingredients)

  return (
    <>
      <AppHeader />
      <main className={styles.content}>
        <BurgerIngredients ingredients={ingredients} />
        <BurgerConstructor />
      </main>
      <Modal>
        <OrderDetails />
      </Modal>
    </>
  )
}