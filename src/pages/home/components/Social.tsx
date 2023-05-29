import styles from './styles/Social.module.scss';
import instagramPhonesImage from '../../../asets/images/home/instagram-screen.png'
import isqPhoneImage from '../../../asets/images/home/phoneisq.png'
import Heading from "../../../components/simple/heading"
import Subheading from "../../../components/ui/Subheading"
import VerticalBlockContainer from '../../../containers/block/VerticalBlockContainer';
import VerticalBlock from '../../../containers/block/VerticalBlock';

const Social = () => {
    return (
        <section className={styles.section}>
            <Subheading text='Социальные сети' />
            <Heading
                text={{
                    title: 'Будь в курсе всего!',
                    subtitle: 'Новости Unite Gaming в социальных сетях'
                }}
                classes={{
                    subtitle: styles.subtitle
                }} />
            <VerticalBlockContainer>
                <VerticalBlock style={styles.cardInstagram} path='https://www.instagram.com/unite.gaming_tm'
                    text={{
                        title: 'Наш Instagram',
                        link: 'Перейти >'
                    }}>
                    <div className={styles.instagramLogo} />
                    <img className={styles.instagramPhonesImage} src={instagramPhonesImage} alt='телефоны' />
                </VerticalBlock>
                <VerticalBlock style={styles.cardICQ} path='https://icq.im/UniteGaming'
                    text={{
                        title: 'Наш ICQ канал',
                        link: 'Перейти >'
                    }}>
                    <div className={styles.ISQLogo} />
                    <img className={styles.isqPhoneImage} src={isqPhoneImage} alt='телефон' />
                </VerticalBlock>
            </VerticalBlockContainer>
        </section>
    )
}

export default Social