import React from 'react';
import styles from './update-profile-form.module.css';
import { Input, EmailInput, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../services/actions/user';

export function UpdateProfileForm() {

    const dispatch = useDispatch();
    const userName = useSelector(state => state.getProfile.user.name);
    const userEmail = useSelector(state => state.getProfile.user.email);

    React.useEffect(() => {
        dispatch(getUser());
    }, [dispatch])

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
        <form className={styles.form}>
            <Input
                type={'text'}
                placeholder={'Имя'}
                onChange={e => setValue(e.target.value)}
                value={userName}
                name={'name'}
                error={false}
                ref={inputRef}
                onIconClick={onIconClick}
                errorText={'Ошибка'}
                size={'default'}
                icon="EditIcon"
            />
            <EmailInput
                placeholder={'Логин'}
                onChange={onChange}
                value={userEmail}
                name={'email'}
                icon="EditIcon"
                extraClass="mt-6"
            />
            <PasswordInput
                placeholder={'Пароль'}
                onChange={onChange}
                onIconClick={onIconClick}
                value={value}
                name={'password'}
                icon="EditIcon"
                extraClass="mt-6"
            />
        </form>
    )
}
