import styles from './styles/Ruls.module.scss';
import HorizontalBlock from '../../../containers/block/HorizontalBlock'
import Heading from '../../../components/simple/heading';

const Ruls = () => {
    return (
        <section className={styles.section}>
            <Heading text={{
                title: 'Правила серверных играх',
                subtitle: 'Вместе создаём приятную атмосферу для всех игроков!'
            }} />
            <HorizontalBlock textRight={true} style={styles.communicationCard} textMaxWidth={490}
                text={{
                    title: 'Общение',
                    paragraph: 'Принимая участие в общении, воздержитесь от использования лексики, которая может оскорбить других или противоречит общепринятым нормам поведения'
                }} >
                <div className={styles.communicationImage} />
            </HorizontalBlock>
            <HorizontalBlock textRight={false} style={styles.card} textMaxWidth={480}
                text={{
                    title: 'Правила выбора имени в игре',
                    paragraph: 'Любое имя должно соответствовать правилам и не быть оскорбительным. Имена, нарушающие наши правила и подрывающие атмосферу игрового сообщества, будут удалены или ограничены'
                }} >
                <div className={styles.nicknameImage} />
            </HorizontalBlock>
            <HorizontalBlock textRight={true} style={styles.card} textMaxWidth={490}
                text={{
                    title: 'Мошенничество',
                    paragraph: 'Вы несете ответственность за репутацию, сложившуюся о вас и вашей учетной записи. Мошенничество в любом его проявлении приведет к незамедлительным мерам по отношению к учетной записи'
                }} >
                <div className={styles.fraudImage} />
            </HorizontalBlock>
            <HorizontalBlock textRight={false} style={styles.card} textMaxWidth={480}
                text={{
                    title: 'Поведение',
                    paragraph: 'Поведение, умышленно портящее игровой опыт других игроков - неприемлемо. Мы ожидаем, что игроки будут относиться друг к другу с уважением и способствовать созданию положительной атмосферы'
                }} >
                <div className={styles.behaviorImage} />
            </HorizontalBlock>
        </section>
    )
}

export default Ruls