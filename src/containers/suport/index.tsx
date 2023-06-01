import styles from './Suport.module.scss';
import HorizontalBlock from '../block/HorizontalBlock'

const Suport = () => {
    return (
        <section className={styles.section}>
            <HorizontalBlock path='/' textRight={false} style={styles.card} textMaxWidth={350}
                text={{
                    title: "Поддержка",
                    paragraph: 'Столкнулись с проблемой? Решение найдется в поддержке!',
                    link: 'Перейти в поддержку >'
                }} >
                <div className={styles.image} />
            </HorizontalBlock>
        </section>
    )
}

export default Suport