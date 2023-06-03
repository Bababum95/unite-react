import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UniteService } from '../../core/services/unite.service'
import { INews } from '../../core/interfaces/interfaces'
import Button from '../../components/ui/Button';
import Title from '../../components/ui/Title'
import Card from '../../components/simple/card';
import styles from './News.module.scss';
import SceletoneCard from '../../components/ui/sceletone/SceletoneCard';

const News = () => {
    const [threeNews, setThreeNews] = useState<INews[]>()
    useEffect(() => {
        const fetchPosts = async () => {
            const data = await UniteService.getPosts(3, 30)
            setThreeNews(data)
        }
        fetchPosts()
    }, [])
    return (
        <section className={styles.section}>
            <Title style={styles.title} text='Новости и мероприятия' />
            <ul className={styles.list}>
                {threeNews ? threeNews.map(news => (
                    <Card
                        key={news.id}
                        link={`/news/${news.id}`}
                        imageId={news.featured_media}
                        title={news.title.rendered}
                        time={news.date}
                        topic={news.teg} />
                )) : (
                    <>
                        <SceletoneCard />
                        <SceletoneCard />
                        <SceletoneCard />
                    </>
                )}
            </ul>
            <Link to='/news'>
                <Button title='Все новости' />
            </Link>
        </section>
    )
}

export default News