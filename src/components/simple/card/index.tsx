import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Card.module.scss';
import {UniteService} from '../../../core/services/unite.service'
import SceletoneImage from '../../ui/sceletone/SceletoneImage';

interface CardProps {
    imageId: number
    title: string
    time?: string
    link: string
    topic: string
    id: number
}

const Card = ({ id, imageId, title, time, topic, link}: CardProps) => {
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
            <Link to={link}>
                {image? (<img className={styles.image} src={image} alt={title} />
                ):(
                    <SceletoneImage style={styles.image} />
                )}
                <p className={styles.topic}>{topic}</p>
                <h3 className={styles.title}>{title.replace(/&#8211;/g, '-')}</h3>
                {time && (<time className={styles.time}>{time}<span>&gt;</span></time>)}
            </Link>
        </li>
    )
}

export default Card