import styles from './burger-ingredients.module.css';
import { BurgerIngredientsTabs } from '../burger-ingredients-tabs/burger-ingredients-tabs';
import { BurgerIngredientsSets } from '../burger-ingredients-sets/burger-ingredients-sets';
import { ingredientType } from '../../utils/types';
import PropTypes from 'prop-types';

export function BurgerIngredients({ bunRef, sauceRef, mainRef }) {
    return (
        <section className={styles.burger_ingredients}>
            <h2 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h2>
            <BurgerIngredientsTabs bunRef={bunRef} sauceRef={sauceRef} mainRef={mainRef} />
            <BurgerIngredientsSets />
        </section>
    )
}
