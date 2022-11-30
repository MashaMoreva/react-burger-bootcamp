import styles from './orders.module.css';

export function Orders() {
    return (
        <section className={`${styles.orders} ml-4 mt-25`}>
            <div className={styles.orders_status}>
                <div className={styles.title}>
                <h3 className="text text_type_main-medium">Готовы:</h3>
                <ul className={styles.list}>
                    <li className="text text_type_digits-default">034533</li>
                    <li className="text text_type_digits-default">034533</li>
                    <li className="text text_type_digits-default">034533</li>
                    <li className="text text_type_digits-default">034533</li>
                    <li className="text text_type_digits-default">034533</li>
                </ul>
                </div>
                <div className={styles.title}>
                <h3 className="text text_type_main-medium">В работе:</h3>
                <ul className={styles.list}>
                    <li className="text text_type_digits-default">034533</li>
                    <li className="text text_type_digits-default">034533</li>
                </ul>
                </div>
            </div>
            <div>
                <h3 className="text text_type_main-medium">Выполнено за все время:</h3>
                <p className={`${styles.counter} text text_type_digits-large`}>28 752</p> 
            </div>
            <div>
                <h3 className="text text_type_main-medium">Выполнено за сегодня:</h3>
                <p className={`${styles.counter} text text_type_digits-large`}>111</p>
            </div>
        </section>
    )
}
