import React from 'react';
import styles from './burger-ingredients-item.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export function BurgerIngredientsItem() {
    return (
        <article className={styles.item}>
            <Counter count={1} size="default" />
            <img src="" alt="" />
            <div>
                <p></p>
                <CurrencyIcon type="primary" />
            </div>
            <p></p>
        </article>
    )
}