import styles from './styles/Achievements.module.scss';

const Achievements = () => {
    return (
        <ul className={styles.list}>
            <li className={styles.item}>
                <p><span>2700+</span> регистраций</p>
            </li>
            <li className={styles.item}>
                <p><span>35+</span> видеоигр</p>
            </li>
            <li className={styles.item}>
                <p><span>20мс</span> задержка</p>
            </li>
            <li className={styles.item}>
                <p><span>Android и PC</span> платформы</p>
            </li>
        </ul>
    )
}

export default Achievements