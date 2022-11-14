import styles from './profile-menu.module.css';
import { NavLink, Link } from 'react-router-dom';

export function ProfileMenu() {

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
                    className={`${styles.link} text text_type_main-medium text_color_inactive`}>
                    Выход
                </Link>
            <span className="text text_type_main-default text_color_inactive mt-20">В этом разделе вы можете</span>
            <span className="text text_type_main-default text_color_inactive">изменить свои персональные данные</span>
        </nav>
    )
}


