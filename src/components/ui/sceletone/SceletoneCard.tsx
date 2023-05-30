import styles from './Sceletone.module.scss'
import SceletoneImage from './SceletoneImage'
import SceletoneString from './SceletoneString'

const SceletoneCard = () => {
    return (
        <li className={styles.card}>
            <SceletoneImage style={styles.card__image} />
            <SceletoneString style={styles.topic} />
            <SceletoneString style={styles.title_1} />
            <SceletoneString style={styles.title_2} />
            <SceletoneString style={styles.time} />
        </li>
    )
}

export default SceletoneCard