import styles from './styles/Content.module.scss';
import HorizontalBlock from '../../../containers/block/HorizontalBlock'
import EventsBlock from '../components/EventsBlock';
import hamachiImage from '../../../asets/images/launcher/pc/hamachi.png'
import serverGamesImage from '../../../asets/images/launcher/pc/server.png'
import gameDayImage from '../../../asets/images/launcher/pc/game-day.png'
import instructionImage from '../../../asets/images/launcher/pc/document.png'

const Content = () => {
    return (
        <section className={styles.section}>
            <HorizontalBlock textRight={false} style={styles.card} textMaxWidth={380}
                text={{
                    title: 'Как работает Launcher?',
                    paragraph: 'Launcher подключает вас к единой локальной сети и даёт возможность играть с друзьями с низким пингом в Туркменистане'
                }} >
                <div className={styles.howWorckImage} />
            </HorizontalBlock>
            <HorizontalBlock path='/' textRight={true} style={styles.card} textMaxWidth={470}
                text={{
                    title: 'Как Hamachi, но лучше',
                    paragraph: 'Unite Gaming предоставляет игры бесплатно. Если нет желаемой игры, можете скачать её самостоятельно и играть с друзьями!',
                    link: 'Перейти к играм >'
                }} >
                <img className={styles.hamachiImage} src={hamachiImage} alt='Серверные игры' />
            </HorizontalBlock>
            <HorizontalBlock path='/' textRight={false} style={styles.card} textMaxWidth={430}
                text={{
                    title: 'Играй на серверах Unite Gaming',
                    paragraph: 'Можно подключиться к играм на наших серверах и проводить весело время с десятками других игроков!',
                    link: 'Перейти к играм >'
                }} >
                <img className={styles.serverGamesImage} src={serverGamesImage} alt='Серверные игры' />
            </HorizontalBlock>
            <EventsBlock />
            <HorizontalBlock path='/' textRight={false} style={styles.card} textMaxWidth={410}
                text={{
                    title: 'Механика - Игра дня',
                    paragraph: 'Каждые 2 дня на главной странице меняется игра. Позволяет увеличить кол-во игроков по определенной игре',
                    link: 'Посмотреть игру >'
                }} >
                <img className={styles.gameDayImage} src={gameDayImage} alt='Игра дня' />
            </HorizontalBlock>
            <HorizontalBlock path='/' textRight={true} style={styles.card} textMaxWidth={490}
                text={{
                    title: 'Инструкция по установке',
                    paragraph: 'Не знаешь как установить Unite Gaming Launcher? Мы подготовили краткую инструкцию!',
                    link: 'Скачать инструкцию >'
                }} >
                <img className={styles.instructionImage} src={instructionImage} alt='Инструкция' />
            </HorizontalBlock>
        </section>
    )
}

export default Content