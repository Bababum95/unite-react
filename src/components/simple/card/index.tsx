import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames';
import {UniteService} from '../../../core/services/unite.service'
import SceletoneImage from '../../ui/sceletone/SceletoneImage';
import styles from './Card.module.scss';

interface CardProps {
    imageId: number
    title: string
    link: string
    topic: string
    time?: string
    fullPage?: boolean
}

const Card = ({ imageId, title, time, topic, link, fullPage}: CardProps) => {
    const [image, setImage] = useState<string>()
    useEffect(() => {
        const fetchPosts = async () => {
            const data = await UniteService.getImage(imageId)
            setImage(data)
        }
        fetchPosts()
    }, [])
    return (
        <li className={classNames(styles.card, {[styles.fullPage]: fullPage})}>
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