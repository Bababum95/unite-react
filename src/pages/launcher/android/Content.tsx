import styles from './Content.module.scss';
import HorizontalBlock from '../../../containers/block/HorizontalBlock'
import howWorckImage from '../../../asets/images/launcher/android/launcher-android.png'
import gamesCollectinImage from '../../../asets/images/launcher/android/gamecollection.png'
import serverGamesImage from '../../../asets/images/launcher/android/game.png'
import EventsBlock from '../components/EventsBlock';

const Content = () => {
    return (
        <section className={styles.section}>
            <HorizontalBlock textRight={false} style={styles.card} textMaxWidth={380}
                text={{
                    title: "Как работает Launcher?",
                    paragraph: 'Launcher подключает вас к единой локальной сети и даёт возможность играть с друзьями с низким пингом в Туркменистане'
                }} >
                <img className={styles.howWorckImage} src={howWorckImage} alt="Launcher" />
            </HorizontalBlock>
            <HorizontalBlock path='/' textRight={true} style={styles.card} textMaxWidth={450}
                text={{
                    title: "Большая коллекция игр",
                    paragraph: 'Все предоставляемые игры можно скачать бесплатно с Google Play. Еженедельно добавляем новые игры в коллекцию!',
                    link: 'Перейти к играм >'
                }} >
                <img className={styles.gamesCollectinImage} src={gamesCollectinImage} alt="Коллекция игр" />
            </HorizontalBlock>
            <HorizontalBlock path='/' textRight={false} style={styles.card} textMaxWidth={450}
                text={{
                    title: "Играй на серверах Unite Gaming",
                    paragraph: 'Можно подключиться к играм на наших серверах и проводить весело время с десятками других игроков!',
                    link: 'Перейти к играм >'
                }} >
                <img className={styles.serverGamesImage} src={serverGamesImage} alt="Серверные игр" />
            </HorizontalBlock>
            <EventsBlock />
        </section>
    )
}

export default Content