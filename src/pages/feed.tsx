import { useSelector } from '../services/hooks';
import styles from './pages.module.css';
import { Redirect } from 'react-router-dom';
import { OrderItem } from '../components/order-item/order-item';

export const Feed = () => {

    const authorization = useSelector((state) => state.userAuthorization.authorization);

    if (!authorization) {
        return (
            <Redirect to={'/login'} />
        )
    }

    return (
        <main className={styles.content}>
            <section>
                <h2 className="text text_type_main-large mt-10 mb-5">Лента заказов</h2>
                <div className={`${styles.scroll_left} pr-2`}>
                    <OrderItem />
                </div>
            </section>

        </main>
    )
}
