import { Link } from 'react-router-dom'
import styles from './styles/SliderItem.module.scss'
import image from '../../../asets/images/games/Minecraft.png'

const SliderItem = () => {
  return (
    <div className={styles.card}>
      <Link to='/'>
        <img className={styles.image} src={image} alt="image" />
        <h3 className={styles.title}>WoW: Wrath of the Lich King</h3>
      </Link>
    </div>
  )
}

export default SliderItem