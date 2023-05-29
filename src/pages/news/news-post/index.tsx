import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { UniteService } from '../../../core/services/unite.service';
import { INews } from '../../../core/interfaces/interfaces';
import styles from './NewsPost.module.scss';
import Body from "../../../containers/body"
import Title from '../../../components/ui/Title';
import SceletoneNewsPost from './SceletoneNewsPost';
import News from '../../../containers/news';
import StartGame from '../../../components/simple/start-game';

const NewsPost = () => {
    let { id } = useParams();
    const [news, setNews] = useState<INews>()
    const [image, setImage] = useState()
    useEffect(() => {
        const fetchPost = async () => {
            if (id) {
                const data = await UniteService.getPost(id)
                const postImage = await UniteService.getImage(data.featured_media)
                setNews(data)
                setImage(postImage)
            }
        }
        fetchPost()
    }, [id])
    return (
        <Body>
            <main>
                {news ? (
                    <section className={styles.section}>
                        <img className={styles.image} src={image} alt={news.title.rendered} />
                        <div className={styles.wraper}>
                            <p className={styles.topic}>{news.teg}</p>
                            <Title style={styles.title} text={news.title.rendered.replace(/&#8211;/g, '-')} />
                            <p className={styles.time}>{news.date}</p>
                            <div className={styles.text} dangerouslySetInnerHTML={{ __html: news.content.rendered }} />
                        </div>
                    </section>
                ) : (
                    <SceletoneNewsPost />
                )}
                <News />
                <StartGame />
            </main>
        </Body>
    )
}

export default NewsPost