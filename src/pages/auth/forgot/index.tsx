import { useNavigate, Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import classNames from 'classnames';
import MainAuth from '../components/MainAuth';
import styles from './Forgot.module.scss';
import Body from '../../../containers/body';
import Button from '../../../components/ui/Button';
import SuportLink from '../components/SuportLink';

type FormData = {
  email: string;
};

const Forgot = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    mode: 'onTouched',
    defaultValues: {
      email: ''
    }
  });
  const onSubmit = handleSubmit(data =>{
    console.log(data)
    navigate("/confirm", { replace: true })
  });

  return (
    <Body>
      <MainAuth text={{ title: 'Подтверждение учётной записи' }} >
        <p className={styles.text}>Введите электронный адрес вашей учётной записи Unite Gaming</p>
        <form onSubmit={onSubmit} className={styles.form} noValidate>
          <label className='label'>
            <input
              type='email'
              className={classNames('input', { 'erorr': errors.email })}
              placeholder='Введите адрес электронной почты'
              {...register('email', { required: 'Неверный адрес электронной почты' })} />
              {errors.email && <span className='error-message'>{errors.email.message}</span>}
          </label>
          <SuportLink />
          <Button type='submit' title='Далее' fullPage={true} />
          <Link to='/sign-in'>
            <Button type='button' classes={styles.back} title='Назад' fullPage={true}/>
          </Link>
        </form>
      </MainAuth>
    </Body>
  )
}

export default Forgot