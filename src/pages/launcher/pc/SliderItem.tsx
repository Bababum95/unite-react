import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/SliderItem.module.scss'
import { UniteService } from '../../../core/services/unite.service'

interface SliderItemProps {
  imageId: string
  title: string
  link: string
}

const SliderItem = ({imageId, title, link }: SliderItemProps) => {
  const [image, setImage] = useState<string>()
    useEffect(() => {
        const fetchPosts = async () => {
            const data = await UniteService.getImage(imageId)
            setImage(data)
        }
        fetchPosts()
    }, [])
  return (
    <div className={styles.card}>
        <img className={styles.image} src={image} alt={title} />
      <Link to={link.replace(/new.unite-gaming.com/g, 'unite-gaming.com')}>
        <h3 className={styles.title}>{title}</h3>
      </Link>
    </div>
  )
}

export default SliderItem