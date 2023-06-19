import classNames from 'classnames'
import styles from './Sceletone.module.scss'
import SceletoneImage from './SceletoneImage'
import SceletoneString from './SceletoneString'

interface SceletoneCardProps {
    fullPage?: boolean
}

const SceletoneCard = ({fullPage}: SceletoneCardProps) => {
    return (
        <li className={classNames(styles.card, {[styles.fullPage]: fullPage})}>
            <SceletoneImage style={styles.card__image} />
            <SceletoneString style={styles.topic} />
            <SceletoneString style={styles.title_1} />
            <SceletoneString style={styles.title_2} />
            <SceletoneString style={styles.time} />
        </li>
    )
}

export default SceletoneCard