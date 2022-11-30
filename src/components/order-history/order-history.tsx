import styles from './order-history.module.css';
import { OrderItem } from '../order-item/order-item';

export function OrderHistory() {

    return (
        <>
            <div className={styles.scroll}>
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
            </div>
        </>
    )
}
