import { useState, useEffect } from 'react'
import { UniteService } from '../../../core/services/unite.service'
import { INews } from '../../../core/interfaces/interfaces';
import styles from './NewsList.module.scss';
import Body from "../../../containers/body"
import StartGame from "../../../components/simple/start-game"
import Title from '../../../components/ui/Title';
import Card from '../../../components/simple/card';
import Button from '../../../components/ui/Button';
import Subheading from '../../../components/ui/Subheading';
import GridContainer from '../../../containers/grid-container';
import SceletoneCard from '../../../components/ui/sceletone/SceletoneCard';
let postsFinished: boolean = false

const NewsList = () => {
    const [newsList, setNewsList] = useState<INews[]>()
    const [buttonIsLoading, setButtonLoading] = useState(false)
    useEffect(() => {
        const fetchPost = async () => {
            const data = await UniteService.getPosts(9, 30)
            setNewsList(data)
        }
        fetchPost()
    }, [])
    const addNews = async () => {
        if (newsList) {
            setButtonLoading(true)
            const data = await UniteService.getMorePosts(3, 30, newsList.length)
            setNewsList([...newsList, ...data])
            if (data.length < 3) {
                postsFinished = true
            }
            setButtonLoading(false)
        }
    }
    return (
        <Body>
            <section className={styles.section}>
                <Subheading text='Новости' />
                <Title text='Новости и мероприятия' />
                <GridContainer style={styles.list}>
                    <>
                        {newsList ? newsList.map(news => (
                            <Card
                                key={news.id}
                                id={news.id}
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
                    </>
                </GridContainer>
                {!postsFinished && newsList && (<Button
                    loading={buttonIsLoading}
                    handleClick={addNews}
                    classes={styles.button}
                    title='Показать еще' />)}
            </section>
            <StartGame />
        </Body>
    )
}

export default NewsList