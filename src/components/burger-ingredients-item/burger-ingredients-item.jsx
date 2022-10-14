import React from 'react';
import styles from './burger-ingredients-item.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export function BurgerIngredientsItem({ ingredient}) {
    return (
        <article className={styles.item}>
            <Counter count={1} size="default" />
            <img className="ml-4 mr-4" src={ingredient.image} alt={ingredient.name} />
            <div className={`${styles.price} mt-2 mb-2`}>
                <p className="text text_type_digits-default">{ingredient.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`${styles.subtitle} text text_type_main-default`}>{ingredient.name}</p> 
        </article>
    )
}