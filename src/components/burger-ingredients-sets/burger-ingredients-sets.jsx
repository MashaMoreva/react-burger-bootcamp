import styles from './burger-ingredients-sets.module.css';
import { BurgerIngredientsSet } from '../burger-ingredients-set/burger-ingredients-set';
import { ingredientType } from '../../utils/types';
import PropTypes from 'prop-types';
import { useRef } from 'react';


export function BurgerIngredientsSets({ bunRef, sauceRef, mainRef }) {





    return (
        <div className={`${styles.scroll_left} mt-10 pr-2`}>
            <div>
                <h3 className="text text_type_main-medium mb-6" ref={bunRef}>Булки</h3>
                <ul className={`${styles.list} pl-4`}>
                    <BurgerIngredientsSet type='bun' />
                </ul>
            </div>
            <div>
                <h3 className="text text_type_main-medium mt-10 mb-6" ref={sauceRef}>Соусы</h3>
                <ul className={`${styles.list} pl-4`}>
                    <BurgerIngredientsSet type='sauce' />
                </ul>
            </div>
            <div>
                <h3 className="text text_type_main-medium mt-10 mb-6" ref={mainRef}>Начинки</h3>
                <ul className={`${styles.list} pl-4`}>
                    <BurgerIngredientsSet type='main' />
                </ul>
            </div>
        </div>
    )
}
