import React from 'react';
import styles from './order-registration.module.css';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails } from '../../services/actions/order-details';
import { Modal } from '../modal/modal';
import { OrderDetails } from '../order-details/order-details';

export function OrderRegistration() {

    const dispatch = useDispatch();

    const main = useSelector(state => state.burgerConstructor.mainList)
    const buns = useSelector(state => state.burgerConstructor.bunsList)
    const ingredients = useSelector(state => state.burgerIngredients.burgerIngredients);
    const idIngredientsList = (ingredients.map((item) => item._id))

    const totalOrderAmount = useMemo(() => (
        main.reduce((acc, { price }) => acc + price, 0) + (buns.reduce((acc, { price }) => acc + price, 0) * 2)
    ), [main, buns]);

    const [openModal, setOpenModal] = React.useState(false);
    const handleOrderClick = () => {
        setOpenModal(!openModal)
        dispatch(getOrderDetails(idIngredientsList))
    }
    const closeModal = () => {
        setOpenModal(!openModal);
    }

    return (
        <>
            <div className={`${styles.order_registration} mt-10 mr-4`}>
                <div className={styles.order_cost}>
                    <p className="text text_type_digits-medium mr-2">{totalOrderAmount}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button onClick={handleOrderClick} type="primary" size="large" htmlType="button">Оформить заказ</Button>
            </div>
            {openModal && (
                <Modal onClose={closeModal}>
                    <OrderDetails />
                </Modal>
            )}
        </>
    )
}
