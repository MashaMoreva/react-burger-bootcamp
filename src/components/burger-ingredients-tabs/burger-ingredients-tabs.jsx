import React from 'react';
import styles from './burger-ingredients-tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useRef } from 'react';

export function BurgerIngredientsTabs() {

    

    const [current, setCurrent] = React.useState('bun')
    const bunRef = useRef();
    const sauceRef = useRef();
    const mainRef = useRef();

    const scrollToRef = (ref) => {
        if (ref === 'bun') {
            bunRef.current.scrollIntoView({ behavior: 'smooth' })
        }
        if (ref === 'sauce') {
            sauceRef.current.scrollIntoView({ behavior: 'smooth' })
        }
        if (ref === 'main') {
            mainRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className={styles.listTab}>
            <Tab value="bun" active={current === 'bun'} onClick={() => scrollToRef('bun')}>
                Булки
            </Tab>
            <Tab value="sauce" active={current === 'sauce'} onClick={() => scrollToRef('sauce')}>
                Соусы
            </Tab>
            <Tab value="main" active={current === 'main'} onClick={() => scrollToRef('main')}>
                Начинки
            </Tab>
        </div>
    )
}
