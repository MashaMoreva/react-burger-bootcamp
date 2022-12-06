import styles from './order-history.module.css';
import { useSelector } from '../../services/hooks';
import { OrderItem } from '../order-item/order-item';

export function OrderHistory() {

    const orders = useSelector(state => state.webSocketUser.orders)

    return (
        <section>
            <ul className={`${styles.scroll} `}>
                {orders.reverse()
                    .map((order) =>
                        <li key={order._id}>
                            <OrderItem order={order} />
                        </li>
                    )}
            </ul>
        </section>
    )
}
