import styles from './pages.module.css';
import { Order } from '../components/order/order';

export const OrderInfo = () => {

    return (
        <div className={styles.ingredient_info}>
            <Order />
        </div>
    )
}
