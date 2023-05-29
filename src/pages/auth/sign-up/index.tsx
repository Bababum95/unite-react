import Select from 'react-select'
import { Link } from 'react-router-dom'
import FormAuth from '../../../components/smart/form-auth';
import MainAuth from '../../../components/smart/form-auth/MainAuth';
import Checkbox from '../../../components/ui/Checkbox';
import { options } from './options';
import styles from './SignUp.module.scss';
import './select.scss'
import Body from '../../../containers/body';

const SignUp = () => {
    return (
        <Body>
            <MainAuth>
                <FormAuth link='/sign-in'
                    text={{
                        title: 'Зарегистрироваться в Unite-Gaming',
                        button: 'Зарегистрироваться',
                        footnote: 'Уже есть учётная запись?',
                        link: 'Войти'
                    }}>
                    <div className={styles.fullName}>
                        <label className='label'>
                            Имя*
                            <input className='input' type="text" placeholder='Введите имя' />
                        </label>
                        <label className='label'>
                            Фамилия*
                            <input className='input' type="text" placeholder='Введите имя' />
                        </label>
                    </div>
                    <label className='label'>
                        Пароль*
                        <input className='input' type="password" placeholder='Введите пароль' />
                    </label>
                    <label className='label'>
                        Подтвердить пароль*
                        <input className='input' type="password" placeholder='Введите пароль' />
                    </label>
                    <label className='label'>
                        Номер телефона*
                        <input className='input' type="phone" placeholder='Введите номер телефона' />
                    </label>
                    <label className='label'>
                        Email*
                        <input className='input' type="email" placeholder='Введите электронную почту' />
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
                        <input className='input' type="text" placeholder='Введите код приглашения' />
                    </label>
                    <div className={styles.checkboxWraper}>
                        <Checkbox>
                            <p className={styles.checkboxText}>
                                Я согласен с
                                <Link className={styles.checkboxLink} to='/'>политикой конфиденциальности</Link>
                                и
                                <Link className={styles.checkboxLink} to='/'>условиями использования сайта</Link>
                            </p>
                        </Checkbox>
                    </div>
                </FormAuth>
            </MainAuth>
        </Body>
    )
}

export default SignUp