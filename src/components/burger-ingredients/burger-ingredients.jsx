import React from 'react';
import styles from './burger-ingredients.module.css';
import { BurgerIngredientsTab } from '../burger-ingredients-tab/burger-ingredients-tab';
import { BurgerIngredientsItem } from '../burger-ingredients-item/burger-ingredients-item';


export function BurgerIngredients () {
    return (
        <section className={styles.burger_ingredients}>
            <h2 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h2>
            <BurgerIngredientsTab />
            <p className="text text_type_main-medium mt-10 mb-6">
                Булки
            </p>
            <p className="text text_type_main-medium mt-10 mb-6">Соусы</p>
            <p className="text text_type_main-medium mt-10 mb-6">Начинки</p>
            <BurgerIngredientsItem />
        </section>
    )
}