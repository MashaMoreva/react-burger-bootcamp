import React from 'react';
import styles from './app.module.css';
import { apiBurger } from '../../api';
import { AppHeader } from '../app-header/app-header';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';


export default function App() {
 const [ingredients, setIngredients] = React.useState([]);

  React.useEffect(() => {
    apiBurger.getIngredients()
      .then(({success, data}) => {
        if (success) {
          setIngredients((data.ingredients))
          console.log(data)
          console.log(ingredients)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <>
      <AppHeader />
      <main className={styles.content}>
        <BurgerIngredients />
        {/* <BurgerConstructor /> */}
      </main>
    </>
  )
}