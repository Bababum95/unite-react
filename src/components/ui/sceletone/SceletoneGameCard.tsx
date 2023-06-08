import styles from './Sceletone.module.scss'
import SceletoneImage from './SceletoneImage'
import SceletoneString from './SceletoneString'

const SceletoneGameCard = () => {
  return (
    <div className={styles.gameCard}>
      <SceletoneImage style={styles.gameCard__image} />
    </div>
  )
}

export default SceletoneGameCard