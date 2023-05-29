import { Link } from 'react-router-dom'
import Body from '../../containers/body';
import Button from '../../components/ui/Button'
import image from '../../asets/images/404.png'
import styles from './NotFound.module.scss';
import Heading from '../../components/simple/heading';


const NotFound = () => {
    return (
        <Body>
            <section className={styles.section}>
                <img src={image} alt='404' />
                <Heading
                    text={{
                        title: 'Упс... похоже, этой страницы не существует',
                        subtitle: 'Несчастные случаи случаются, но не стесняйтесь использовать меню навигации, чтобы узнать больше интересных преимуществ, которые могут помочь вам не заблудиться.'
                    }}
                    classes={{
                        title: styles.title,
                        subtitle: styles.subtitle
                    }} />
                <Link to='/'>
                    <Button title='Перейти на главную' />
                </Link>
            </section>
        </Body>
    )
}

export default NotFound