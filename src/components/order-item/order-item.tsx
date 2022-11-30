import styles from './order-item.module.css';
import { Link, useLocation } from 'react-router-dom';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export function OrderItem() {
    return (
        <article className={`${styles.item} pt-6 pr-6 pb-6 pl-6`}>
            {/* <Link to={{
                pathname: `/feed/:${number}`,
                state: { background: location },
            }}
                className={styles.link}> */}
            <div className={styles.order}>
                <p className="text text_type_digits-default">#034535</p>
                <p className="text text_type_main-default text_color_inactive">
                    Сегодня, 16:20 i-GMT+3
                </p>
            </div>
            <p className="text text_type_main-medium">Death Star Starship Main бургер</p>
            <div className={styles.order_info}>
                <ul className={styles.list}>
                    <li className={styles.list_item}><img className={styles.list_image} src="https://code.s3.yandex.net/react/code/bun-01.png" alt="" /></li>
                    <li className={styles.list_item}><img className={styles.list_image} src="https://code.s3.yandex.net/react/code/bun-01.png" alt="" /></li>
                    <li className={styles.list_item}><img className={styles.list_image} src="https://code.s3.yandex.net/react/code/bun-01.png" alt="" /></li>
                    <li className={styles.list_item}><img className={styles.list_image} src="https://code.s3.yandex.net/react/code/bun-01.png" alt="" /></li>
                    <li className={styles.list_item}><img className={styles.list_image} src="https://code.s3.yandex.net/react/code/bun-01.png" alt="" /></li>
                </ul>
                <div className={`${styles.price} mt-1 mb-2`}>
                    <p className="text text_type_digits-default">480</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
            {/* </Link> */}
        </article >
    )
}

