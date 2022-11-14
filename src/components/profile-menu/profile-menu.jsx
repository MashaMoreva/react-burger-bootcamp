import React from 'react';
import styles from './profile-menu.module.css';
import { NavLink, Link } from 'react-router-dom';
import { userLogout } from '../../services/actions/logout';
import { useDispatch } from 'react-redux';

export function ProfileMenu() {

    const dispatch = useDispatch();

    const handleLogout = React.useCallback(() => {
        dispatch(userLogout());
        sessionStorage.setItem('authorization', JSON.stringify(false));
      }, [dispatch])

    return (
        <nav className={styles.menu}>
                <NavLink
                    to='/profile'
                    exact={true}
                    className={`${styles.link} text text_type_main-medium text_color_inactive`}
                    activeClassName={styles.link_active}>
                    Профиль
                </NavLink>
                <NavLink
                    to='/profile/orders'
                    className={`${styles.link} text text_type_main-medium text_color_inactive`}
                    activeClassName={styles.link_active}>
                    История заказов
                </NavLink>
                <Link
                    to="/login"
                    onClick={handleLogout}
                    className={`${styles.link} text text_type_main-medium text_color_inactive`}>
                    Выход
                </Link>
            <span className="text text_type_main-default text_color_inactive mt-20">В этом разделе вы можете</span>
            <span className="text text_type_main-default text_color_inactive">изменить свои персональные данные</span>
        </nav>
    )
}


