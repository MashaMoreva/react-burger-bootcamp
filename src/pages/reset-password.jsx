import React from 'react';
import styles from './pages.module.css';
import { PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

export function ResetPassword() {
    const [value, setValue] = React.useState()
    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }
    const onChange = e => {
        setValue(e.target.value)
    }

    return (
        <form className={styles.default}>
            <h2 className="text text_type_main-medium">Восстановление пароля</h2>
            <PasswordInput
                placeholder='Введите новый пароль'
                onChange={onChange}
                value={value}
                name={'password'}
                icon="ShowIcon"
                extraClass="mt-6"
            />
            <Input
                type={'text'}
                placeholder={'Введите код из письма'}
                onChange={e => setValue(e.target.value)}
                value={value}
                name={'name'}
                error={false}
                ref={inputRef}
                onIconClick={onIconClick}
                errorText={'Ошибка'}
                size={'default'}
                extraClass="mt-6"
            />
            <Button type="primary" size="medium" htmlType="button" extraClass="mt-6">Сохранить</Button>
            <div className={`${styles.choice} mt-20`}>
                <p className="text text_type_main-default text_color_inactive">Вспомнили пароль?</p>
                <Link to='/login' className={`${styles.link} text text_type_main-default`}>Войти</Link>
            </div>
        </form>
    )
}
