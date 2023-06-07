import styles from './styles/Products.module.scss';
import Heading from "../../../components/simple/heading"
import VerticalBlockContainer from '../../../containers/block/VerticalBlockContainer';
import VerticalBlock from '../../../containers/block/VerticalBlock'
import HorizontalBlock from '../../../containers/block/HorizontalBlock';
import computersImage from '../../../asets/images/home/computers.png'
import phonesImage from '../../../asets/images/home/phones.png'
import serverGamesImage from '../../../asets/images/home/servergame.png'
import communityImage from '../../../asets/images/home/GTA_5_Men_Assault.png'
import Subheading from '../../../components/ui/Subheading';

const Products = () => {
    return (
        <section className={styles.section}>
            <Subheading text='Наши продукты' />
            <Heading
                text={{
                    title: 'Играйте на любимой платформе',
                    subtitle: 'Исследуй наши лучшие продукты и компьютерные игры для классного времяпровождения!'
                }}
                classes={{
                    title: styles.title,
                    subtitle: styles.subtitle
                }} />
            <VerticalBlockContainer>
                <VerticalBlock style={styles.cardPC} path='/launcheer-for-pc' text={{
                    title: 'Unite Gaming Launcher для PC',
                    link: 'Скачать >'
                }}>
                    <img className={styles.computersImage} src={computersImage} alt="компьютер" />
                </VerticalBlock>
                <VerticalBlock style={styles.cardAndroid} path='/launcheer-for-android' text={{
                    title: 'Unite Gaming Launcher для Android',
                    link: 'Скачать >'
                }}>
                    <img className={styles.phonesImage} src={phonesImage} alt="телефон" />
                </VerticalBlock>
            </VerticalBlockContainer>
            <HorizontalBlock path='/' textRight={false} style={styles.cardServerGames} textMaxWidth={360}
                text={{
                    title: "Серверные игры",
                    paragraph: 'Лучшие из лучших игр уже на серверах Unite Gaming!',
                    link: 'Перейти к играм >'
                }} >
                <img className={styles.serverGamesImage} src={serverGamesImage} alt="Cервернык игры" />
            </HorizontalBlock>
            <HorizontalBlock path='/' textRight={false} style={styles.CardPopularGames} textMaxWidth={360}
                text={{
                    title: "Популярные игры",
                    paragraph: 'Обожаемые всеми сетевые и одиночные игры на любой вкус!',
                    link: 'Перейти к библиотеке >'
                }} >
                <div className={styles.popularGamesImage} />
            </HorizontalBlock>
            <HorizontalBlock path='/' textRight={false} style={styles.cardCommunity} textMaxWidth={425}
                text={{
                    title: "Вступай в сообщество",
                    paragraph: 'Заводите знакомства, вступайте в группы, общайтесь и не только!',
                    link: 'Начать общаться >'
                }} >
                <img className={styles.communityImage} src={communityImage} alt="обложка gta 5" />
            </HorizontalBlock>
        </section >
    )
}

export default Products