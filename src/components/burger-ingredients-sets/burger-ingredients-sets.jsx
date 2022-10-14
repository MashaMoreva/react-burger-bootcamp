import React from 'react';
import styles from './burger-ingredients-sets.module.css'; 
import { BurgerIngredientsItem } from '../burger-ingredients-item/burger-ingredients-item';

export function BurgerIngredientsSets({ingredients}) {
    return (
        <div className={`${styles.scroll_left} mt-10 pr-2`}>
            <div>
                <h3 className="text text_type_main-medium  mb-6">Булки</h3>
                <ul className={`${styles.list} pl-4`}>
                    {ingredients.filter((item) => item.type === 'bun').map((item) => (<BurgerIngredientsItem key={item._id} ingredient={item} />))}
                </ul>
            </div>
            <div>
                <h3 className="text text_type_main-medium mt-10 mb-6">Соусы</h3>
                <ul className={`${styles.list} pl-4`}>
                    {ingredients.filter((item) => item.type === 'sauce').map((item) => (<BurgerIngredientsItem key={item._id} ingredient={item} />))}
                </ul>
            </div>
            <div>
                <h3 className="text text_type_main-medium mt-10 mb-6">Начинки</h3>
                <ul className={`${styles.list} pl-4`}>
                    {ingredients.filter((item) => item.type === 'main').map((item) => (<BurgerIngredientsItem key={item._id} ingredient={item} />))}
                </ul>
            </div>
        </div>
    )
}

// {`${styles.scroll} mt-10`}