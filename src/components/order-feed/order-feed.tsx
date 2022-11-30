import styles from './order-feed.module.css';
import { OrderItem } from '../order-item/order-item';

export function OrderFeed() {
    return (
        <section>
            <h2 className="text text_type_main-large mt-10 mb-5">Лента заказов</h2>
            <div className={`${styles.scroll} pr-2`}>
                <OrderItem />
            </div>
        </section>
    )
}
