
import HorizontalBlock from "../../../containers/block/HorizontalBlock"
import images from "./images";
import styles from './styles/Content.module.scss';


interface ContentProps {
    name: 'Mumble' | 'Teamspeak'
    ipList: string[]
}

const Content = ({ name, ipList }: ContentProps) => {
    return (
        <section className={styles.section}>
            <HorizontalBlock path='/' textRight={true} style={styles.card} textMaxWidth={490}
                text={{
                    title: 'Правила использования',
                    paragraph: `В случае нарушения правил, возможна полная блокировка учётной записи на платформе Unite Gaming. Пожалуйста, изучите правила до использования ${name}`,
                    link: 'Изучить правила >'
                }}>
                    <img className={styles.rulsImage} src={images.firstBlock[name]} alt={`${name} logo`} />
            </HorizontalBlock>
            <HorizontalBlock path='/' textRight={false} style={styles.card} textMaxWidth={395}
                text={{
                    title: 'Инструкция по подключению',
                    paragraph: `Написали поэтапную инструкцию для подключения к ${name}. Рекомендуем к изучению`,
                    link: 'Скачать инструкцию >'
                }}>
                    <img className={styles.instructionImage} src={images.secondBlock} alt='Инструкция по подключению' />
            </HorizontalBlock>
            <HorizontalBlock textRight={true} style={styles.card} textMaxWidth={335}
                text={{
                    title: 'IP действующих серверов',
                    paragraph: `Активные сервера ${name}:
                    ${ipList.map((ip, i) => (
                        ` • Unite Gaming ${i + 1}: ${ip}`
                    ))}`
                }}>
                    <img className={styles.ipImage} src={images.thirdBlock[name]} alt={`${name} список IP`} />
            </HorizontalBlock>
        </section>
    )
}

export default Content