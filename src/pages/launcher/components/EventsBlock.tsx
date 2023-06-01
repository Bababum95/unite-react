import styles from './styles/EventsBlock.module.scss';
import HorizontalBlock from '../../../containers/block/HorizontalBlock'
import phoneImage from '../../../asets/images/launcher/events.png'

const EventsBlock = () => {
    return (
        <HorizontalBlock path='/news' textRight={true} style={styles.card} textMaxWidth={400}
            text={{
                title: "Еженедельные мероприятия",
                paragraph: 'Каждую неделю проводим турниры и мероприятия. Отслеживай информацию в новостях или ICQ канале',
                link: 'Текущие мероприятия >'
            }} >
            <img className={styles.phoneImage} src={phoneImage} alt="Новостная страница на экране телефона" />
        </HorizontalBlock>
    )
}

export default EventsBlock