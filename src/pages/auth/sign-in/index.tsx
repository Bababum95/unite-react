import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import classNames from 'classnames';
import MainAuth from '../components/MainAuth';
import styles from './SignIn.module.scss';
import Checkbox from '../../../components/ui/Checkbox';
import Body from '../../../containers/body';
import Button from '../../../components/ui/Button';

type FormData = {
  email: string;
  password: string;
  checkbox: boolean
};

const SignIn = () => {
  const [showPass, setShowPass] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    mode: 'onTouched',
    defaultValues: {
      email: '',
      password: '',
      checkbox: true
    }
  });
  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <Body>
      <MainAuth
        link='/sign-up'
        text={{
          title: 'Войдите в платформу Unite-Gaming',
          footnote: 'Нет аккаунта?',
          link: 'Регистрация'
        }} >
        <form onSubmit={onSubmit} className={styles.form} noValidate>
          <label className='label'>
            Email
            <input
              type='email'
              className={classNames('input', { 'erorr': errors.email })}
              placeholder='Введите адрес электронной почты'
              {...register('email', { required: 'Неверный адрес электронной почты' })} />
              {errors.email && <span className='error-message'>{errors.email.message}</span>}
          </label>
          <label className='label'>
            Пароль
            <input
              className={classNames('input', { 'erorr': errors.password })}
              type={showPass? 'text' : 'password'}
              placeholder='Введите пароль'
              {...register('password', { required: 'Неверный пароль' })} />
              {errors.password && <span className='error-message'>{errors.password.message}</span>}
              <button
              type='button'
              className={classNames(styles.buttonShowPass, {[styles.active]: showPass})}
              onClick={() => setShowPass(!showPass)} />
          </label>
          <div className={styles.wraper}>
            <Checkbox register={register}>
              <p>Запомнить меня</p>
            </Checkbox>
            <Link className={styles.forget} to='/forgot'>Забыли пароль?</Link>
          </div>
          <Button title='Войти в систему' fullPage={true} />
        </form>
      </MainAuth>
    </Body>
  )
}

export default SignIn