import React from 'react';
import styles from './burger-constructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { OrderRegistration } from '../order-registration/order-registration';
import { useDrop } from 'react-dnd';
import { nanoid } from 'nanoid';
import { setBun, addIngredient } from '../../services/actions/burger-constructor';
import { useSelector, useDispatch } from '../../services/hooks';
import { useHistory } from 'react-router-dom';
import { BurgerConstructorElement } from '../burger-constructor-element/burger-constructor-element';
import { deleteIngredient } from '../../services/actions/burger-constructor';
import { getOrderDetails } from '../../services/actions/order-details';
import { Modal } from '../modal/modal';
import { OrderDetails } from '../order-details/order-details';
import { TIngredientType, TItem } from '../../services/types/types';


export function BurgerConstructor() {
    const dispatch = useDispatch()
    const history = useHistory()

    const main = useSelector(state => state.burgerConstructor.mainList)
    const buns = useSelector(state => state.burgerConstructor.bunsList)
    const idMainList = (main.map((item) => item._id))
    const idBunsList = (buns.map((item) => item._id))
    const idIngredientsList = idMainList.concat(idBunsList).concat(idBunsList)

    console.log(idIngredientsList)

    const authorization = useSelector((state) => state.userAuthorization.authorization);

    const [openModal, setOpenModal] = React.useState(false);
    const handleOrderClick = () => {
        if (!authorization) {
            history.replace('/login?retpath=/')
        } else {
            setOpenModal(!openModal)
            dispatch(getOrderDetails(idIngredientsList))
        }
    }
    const closeModal = () => {
        setOpenModal(!openModal);
    }

    const [, dropIngredient] = useDrop(() => ({
        accept: 'ingredient',
        drop: ((item: TItem) => addElement(item.ingredient))
    }))

    const addElement = (element: TIngredientType) => {
        element = { ...element, id: nanoid() }
        if (element.type === 'bun') {
            dispatch(setBun(element))
        }
        if (element.type !== 'bun') {
            dispatch(addIngredient(element))
        }

    }

    const deleteElement = (element: TIngredientType) => {
        dispatch(deleteIngredient(element))
    }

    return (
        <section className={`${styles.burger_constructor} mt-25`} ref={dropIngredient}>
            <ul className={`${styles.order_list} pl-3`}>
                {buns.map((element) => {
                    if (element.type === 'bun')
                        return (
                            <li className={`${styles.default_ingredient} mb-4 ml-8`} key={element.id}>
                                <ConstructorElement
                                    type="top"
                                    isLocked={true}
                                    text={`${element.name} (верх)`}
                                    price={element.price}
                                    thumbnail={element.image}
                                />
                            </li>
                        )
                }
                )}
                <div className={`${styles.scroll} pr-2`}>
                    {main.map((element, index) => {
                        if (element.type !== 'bun')
                            return (
                                <BurgerConstructorElement
                                    element={element}
                                    index={index}
                                    id={element.id}
                                    key={element.id}
                                    deleteElement={deleteElement}
                                />
                            )
                    }
                    )}
                </div>
                {buns.map((element) => {
                    if (element.type === 'bun')
                        return (
                            <li className={`${styles.default_ingredient} mt-4 ml-8`} key={element.id}>
                                <ConstructorElement
                                    type="bottom"
                                    isLocked={true}
                                    text={`${element.name} (низ)`}
                                    price={element.price}
                                    thumbnail={element.image}
                                />
                            </li>
                        )
                }
                )}
            </ul>
            {buns.length > 0 ?
                <OrderRegistration handleOrderClick={handleOrderClick} />
                : null}
            {openModal && (
                <Modal onClose={closeModal}>
                    <OrderDetails />
                </Modal>
            )}
        </section>
    )
}

// Оформить заказ без булочки не получится :(
//     Веберите и перетащите булочку сюда 
