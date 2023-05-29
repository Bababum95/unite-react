import styles from './styles/Other.module.scss';
import Heading from "../../../components/simple/heading"
import Subheading from "../../../components/ui/Subheading"
import HorizontalBlock from '../../../containers/block/HorizontalBlock';
import buyGamesImage from '../../../asets/images/home/buy-games.png'
import steamImage from '../../../asets/images/home/steam.png'
import partnersImage from '../../../asets/images/home/partners.png'


const Other = () => {
    return (
        <section className={styles.section}>
            <Subheading text='Новые блоки' />
            <Heading
                text={{
                    title: 'Другие услуги',
                    subtitle: 'Услуги, которые вам могут быть интересны'
                }}
                classes={{
                    subtitle: styles.subtitle
                }} />
            <HorizontalBlock path='/' textRight={false} style={styles.card} textMaxWidth={380}
                text={{
                    title: "Steam, Epic Games, Battle.net",
                    paragraph: 'Поможем приобрести игры на популярных площадках',
                    link: 'Купить игру >'
                }} >
                <img className={styles.buyGamesImage} src={buyGamesImage} alt="Логотипы площадок" />
            </HorizontalBlock>
            <HorizontalBlock path='/' textRight={false} style={styles.card} textMaxWidth={310}
                text={{
                    title: "Наши партнёры",
                    paragraph: 'Скачивай игры или играй в Unite Gaming у партнеров',
                    link: 'Все партнёры >'
                }} >
                <img className={styles.partnersImage} src={partnersImage} alt="Логотипы площадок" />
            </HorizontalBlock>
            <HorizontalBlock path='/' textRight={false} style={styles.card} textMaxWidth={310}
                text={{
                    title: "Ключ - Steam",
                    paragraph: 'Снизим задержку на внешние сервера!',
                    link: 'Ключ - Steam >'
                }} >
                <img className={styles.steamImage} src={steamImage} alt="Логотипы площадок" />
            </HorizontalBlock>
        </section>
    )
}

export default Other