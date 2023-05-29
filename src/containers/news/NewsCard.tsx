import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/NewsCard.module.scss';
import {UniteService} from '../../core/services/unite.service'

interface NewsCardProps {
    imageId: number
    title: string
    time: string
    topic: string
    id: number
}

const NewsCard = ({ id, imageId, title, time, topic}: NewsCardProps) => {
    const [image, setImage] = useState<string>()
    useEffect(() => {
        const fetchPosts = async () => {
            const data = await UniteService.getImage(imageId)
            setImage(data)
        }
        fetchPosts()
    }, [])
    return (
        <li className={styles.card}>
            <Link to={`/news/${id}`}>
                <img className={styles.image} src={image} alt={title} />
                <p className={styles.topic}>{topic}</p>
                <h3 className={styles.title}>{title.replace(/&#8211;/g, '-')}</h3>
                <time className={styles.time}>{time}<span>&gt;</span></time>
            </Link>
        </li>
    )
}

export default NewsCard