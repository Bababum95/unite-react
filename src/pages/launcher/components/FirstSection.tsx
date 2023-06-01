import Heading from '../../../components/simple/heading';
import Android from '../../../components/svg/Android';
import Button from '../../../components/ui/Button';
import Subheading from '../../../components/ui/Subheading';
import ParallaxContainer from '../../../containers/parallax'
import styles from './styles/FirstSection.module.scss';

const FirstSection = () => {
    return (
        <ParallaxContainer leftItem={styles.leftItem} rightItem={styles.rightItem} >
            <div className={styles.content}>
                <div className={styles.icon}>
                   <Android />
                </div>
                <Subheading text='LAUNCHER FOR ANDROID' />
                <Heading
                    text={{
                        title: 'Unite Gaming Launcher',
                        subtitle: 'Мобильный гейминг в Туркменистане!'
                    }} />
                <div className={styles.wraper}>
                    <Button classes={styles.button} title='Регистрация на ключ' />
                    <Button classes={styles.button} title='Скачать с Unite Gaming' />
                    <Button classes={styles.button} title='Скачать с Google Play' />
                </div>
            </div>
        </ParallaxContainer>
    )
}

export default FirstSection