import { useState, useEffect } from 'react'
import { UniteService } from '../../../core/services/unite.service';
import { IGame } from '../../../core/interfaces/interfaces';
import styles from './styles/PopularGames.module.scss';
import Heading from '../../../components/simple/heading'
import GridContainer from '../../../containers/grid-container';
import Card from '../../../components/simple/card';
import SceletoneCard from '../../../components/ui/sceletone/SceletoneCard';

const PopularGames = () => {
    const [gamesList, setGamesList] = useState<IGame[]>()
    useEffect(() => {
        const fetchPost = async () => {
            const data = await UniteService.getPosts(6, 43)
            // console.log(data)
            setGamesList(data)
        }
        fetchPost()
    }, [])
    return (
        <section className={styles.section}>
            <Heading
                classes={{
                    title: styles.title
                }}
                text={{
                    title: 'Популярные игры на Android',
                    subtitle: 'Обожаемые всеми сетевые игры на любой вкус!'
                }} />
            <GridContainer style={styles.content}>
                <>
                    {gamesList ? gamesList.map(game => (
                        <Card
                            key={game.id}
                            id={game.id}
                            link={game.link}
                            imageId={game.featured_media}
                            title={game.title.rendered}
                            topic={game.junre} />
                    )) : (
                        <>
                            <SceletoneCard />
                            <SceletoneCard />
                            <SceletoneCard />
                        </>
                    )}
                </>
            </GridContainer>
        </section>
    )
}

export default PopularGames