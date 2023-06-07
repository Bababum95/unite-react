import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Select from 'react-select'
import classNames from 'classnames';
import MainAuth from '../components/MainAuth';
import Checkbox from '../../../components/ui/Checkbox';
import { options } from './options';
import styles from './SignUp.module.scss';
import './select.scss'
import Body from '../../../containers/body';
import Button from '../../../components/ui/Button';

type FormData = {
    name: string
    password: string
    confirmPassword: string
    phone: string
    email: string
    day: string
    month: string
    year: string
    city: string
    knows: string
    referal: string
    checkbox: boolean
};

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        mode: 'onTouched',
        defaultValues: {
            name: '',
            password: '',
            confirmPassword: '',
            phone: '',
            email: '',
            day: '',
            month: '',
            year: '',
            city: '',
            referal: '',
            checkbox: false
        }
    });
    const onSubmit = handleSubmit(data => console.log(data));
    return (
        <Body>
            <MainAuth
                link='/sign-in'
                text={{
                    title: 'Зарегистрироваться в Unite-Gaming',
                    footnote: 'Уже есть учётная запись?',
                    link: 'Войти'
                }}>
                <form onSubmit={onSubmit} className={styles.form} noValidate>
                    <label className='label'>
                        Имя*
                        <input
                            type="text"
                            className={classNames('input', { 'erorr': errors.name })}
                            placeholder='Введите имя'
                            {...register('name', { required: 'Обязательное поле' })} />
                        {errors.name && <span className='error-message'>{errors.name.message}</span>}
                    </label>
                    <label className='label'>
                        Пароль*
                        <input
                            type="password"
                            className={classNames('input', { 'erorr': errors.password })}
                            placeholder='Введите пароль'
                            {...register('password', { required: 'Обязательное поле' })} />
                        {errors.password && <span className='error-message'>{errors.password.message}</span>}
                    </label>
                    <label className='label'>
                        Подтвердить пароль*
                        <input
                            className={classNames('input', { 'erorr': errors.confirmPassword })}
                            type="password"
                            placeholder='Введите пароль'
                            {...register('confirmPassword', { required: 'Обязательное поле' })} />
                        {errors.confirmPassword && <span className='error-message'>{errors.confirmPassword.message}</span>}
                    </label>
                    <label className='label'>
                        Номер телефона*
                        <input
                            type="phone"
                            className={classNames('input', { 'erorr': errors.phone })}
                            placeholder='Введите номер телефона'
                            {...register('phone', { required: 'Обязательное поле' })} />
                        {errors.phone && <span className='error-message'>{errors.phone.message}</span>}
                    </label>
                    <label className='label'>
                        Email*
                        <input
                            type='email'
                            className={classNames('input', { 'erorr': errors.email })}
                            placeholder='Введите адрес электронной почты'
                            {...register('email', { required: 'Обязательное поле' })} />
                        {errors.email && <span className='error-message'>{errors.email.message}</span>}
                    </label>
                    <div className='label'>
                        Дата рождения*
                        <div className={styles.date}>
                            <Select
                                options={options}
                                required={true}
                                placeholder='День'
                                classNamePrefix="react-select"
                                className="react-select-container" />
                            <Select
                                options={options}
                                required={true}
                                placeholder='Месяц'
                                classNamePrefix="react-select"
                                className="react-select-container" />
                            <Select
                                options={options}
                                required={true}
                                placeholder='Год'
                                classNamePrefix="react-select"
                                className="react-select-container" />
                        </div>
                    </div>
                    <label className='label'>
                        Город *
                        <Select
                            options={options}
                            placeholder='Выберите из списка'
                            classNamePrefix="react-select"
                            className="react-select-container" />
                    </label>
                    <label className='label'>
                        Как вы о нас узнали*
                        <Select
                            options={options}
                            placeholder='Выберите из списка'
                            classNamePrefix="react-select"
                            className="react-select-container" />
                    </label>
                    <label className='label'>
                        Реферальный код
                        <input
                            className='input'
                            type="text"
                            placeholder='Введите код приглашения'
                            {...register('referal')} />
                    </label>
                    <div className={styles.checkboxWraper}>
                        <Checkbox register={register}>
                            <p className={styles.checkboxText}>
                                Я согласен с
                                <Link className={styles.checkboxLink} to='/'>политикой конфиденциальности</Link>
                                и
                                <Link className={styles.checkboxLink} to='/'>условиями использования сайта</Link>
                            </p>
                        </Checkbox>
                    </div>
                    <Button title='Зарегистрироваться' fullPage={true} />
                </form>
            </MainAuth>
        </Body >
    )
}

export default SignUp