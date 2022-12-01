import { FC } from 'react';
import { useSelector } from '../../services/hooks';
import styles from './order-history.module.css';
import { OrderItem } from '../order-item/order-item';
import { TOrderProps } from '../../services/types/types';

export const OrderHistory: FC<TOrderProps> = ({ order }) => {

    const orders = useSelector(state => state.webSocket.orders)

    return (
        <section>
            <ul className={`${styles.scroll} `}>
                {orders
                    .map((order) =>
                        <li key={order._id}>
                            <OrderItem order={order} />
                        </li>
                    )}
            </ul>
        </section>
    )
}
