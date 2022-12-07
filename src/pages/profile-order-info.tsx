import { useEffect } from "react";
import styles from './pages.module.css';
import { useDispatch } from '../services/hooks';
import { wsConnectionStartUser, wsConnectionClosedUser } from '../services/actions/websockets';
import { Order } from '../components/order/order';

export const ProfileOrderInfo = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(wsConnectionStartUser());
        return () => {
            dispatch(wsConnectionClosedUser());
        };
    }, []);

    return (
        <div className={styles.info}>
            <Order />
        </div>
    )
}
