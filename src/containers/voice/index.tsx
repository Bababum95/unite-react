import styles from './Voice.module.scss';
import Heading from '../../components/simple/heading'
import VerticalBlock from '../block/VerticalBlock'
import VerticalBlockContainer from '../block/VerticalBlockContainer'
import teamspeackImage from '../../asets/images/voice/teamspeak.png'
import mumbleImage from '../../asets/images/voice/mumble.png'
import HorizontalBlock from '../block/HorizontalBlock';

const Voice = () => {
    return (
        <section className={styles.section}>
            <Heading
                text={{
                    title: 'Голосовой чат в играх',
                    subtitle: 'Общайтесь, болтайте и разговаривайте с друзьями!'
                }}
                classes={{
                    subtitle: styles.subtitle
                }} />
            <VerticalBlockContainer>
                <VerticalBlock style={styles.cardTeamspeak} path='/teamspeak'
                    text={{
                        title: 'Teamspeak',
                        link: 'Скачать >'
                    }}>
                    <img className={styles.cardImage} src={teamspeackImage} alt='Teamspeak' />
                </VerticalBlock>
                <VerticalBlock style={styles.cardMumble} path='/mumble'
                    text={{
                        title: 'Mumble',
                        link: 'Скачать >'
                    }}>
                    <img className={styles.cardImage} src={mumbleImage} alt='Mumble' />
                </VerticalBlock>
            </VerticalBlockContainer>
            <HorizontalBlock path='/' textRight={false} style={styles.cardSearch} textMaxWidth={350}
                text={{
                    title: "Поиск напарников",
                    paragraph: 'Найди друзей с которыми будешь играть в нашем сообществе!',
                    link: 'Перейти в сообщество >'
                }} >
                <div className={styles.searchImage} />
            </HorizontalBlock>
        </section>
    )
}

export default Voice