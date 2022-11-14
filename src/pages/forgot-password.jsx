import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './pages.module.css';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { forgotPassword } from '../services/actions/forgot-password';

export function ForgotPassword() {

    const dispatch = useDispatch();
    const [value, setValue] = React.useState({
        email: ''
    })
    
    const handleRecover = (evt) => {
        evt.preventDefault();
        dispatch(forgotPassword(value.email));
      }

    return (
        <form className={styles.default} onSubmit={handleRecover}>
            <h2 className="text text_type_main-medium">Восстановление пароля</h2>
            <EmailInput
                onChange={(evt) => setValue({ ...value, email: evt.target.value })}
                value={value.email}
                name={'email'}
                extraClass="mt-6"
                placeholder='Укажите e-mail'
            />
            <Button type="primary" size="medium" htmlType="submit" extraClass="mt-6">Восстановить</Button>
            <div className={`${styles.choice} mt-20`}>
                <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
                <Link to='/login' className={`${styles.link} text text_type_main-default`}>Войти</Link>
            </div>
        </form>
    )
}
