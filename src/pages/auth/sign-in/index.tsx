import { Link } from 'react-router-dom'
import MainAuth from '../../../components/smart/form-auth/MainAuth';
import FormAuth from '../../../components/smart/form-auth';
import styles from './SignIn.module.scss';
import Checkbox from '../../../components/ui/Checkbox';
import Body from '../../../containers/body';



const SignIn = () => {
  return (
    <Body>
      <MainAuth>
        <FormAuth link='/sign-up'
          text={{
            title: 'Войдите в платформу Unite-Gaming',
            button: 'Войти в систему',
            footnote: 'Нет аккаунта?',
            link: 'Регистрация'
          }} >
          <label className='label'>
            Email*
            <input className='input' name='email' type="email" placeholder='Введите адрес электронной почты' required />
          </label>
          <label className='label'>
            Пароль*
            <input className='input' name='password' type="password" placeholder='Введите пароль' required />
          </label>
          <div className={styles.wraper}>
            <Checkbox>
              <p>Запомнить меня</p>
            </Checkbox>
            <Link className={styles.forget} to='/'>Забыли пароль?</Link>
          </div>
        </FormAuth>
      </MainAuth>
    </Body>
  )
}

export default SignIn