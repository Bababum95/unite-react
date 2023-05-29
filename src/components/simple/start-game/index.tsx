import { Link } from 'react-router-dom'
import styles from './StartGame.module.scss';
import Button from '../../ui/Button'
import Heading from '../heading'

const StartGame = () => {
    return (
        <section className={styles.section}>
            <Heading
                text={{
                    title: 'Как начать играть на платформе?',
                    subtitle: 'Пройди регистрацию, получи индивидуальный ключ и начни играть с нами!'
                }}
                classes={{
                    subtitle: styles.subtitle
                }} />
            <Link to='/'>
                <Button title='Регистрация' />
            </Link>
        </section>
    )
}

export default StartGame