import { useSelector } from '../services/hooks';
import styles from './pages.module.css';
import { Redirect } from 'react-router-dom';
import { OrderFeed } from '../components/order-feed/order-feed';
import { Orders } from '../components/orders/orders';

export const Feed = () => {

    const authorization = useSelector((state) => state.userAuthorization.authorization);

    if (!authorization) {
        return (
            <Redirect to={'/login'} />
        )
    }

    return (
        <section className={styles.content}>
            <OrderFeed />
            <Orders />
        </section>
    )
}
