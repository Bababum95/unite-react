import { useState, useEffect } from 'react'
import { UniteService } from '../../../core/services/unite.service';
import { IGame } from '../../../core/interfaces/interfaces';
import styles from './styles/PopularGames.module.scss';
import Heading from '../../../components/simple/heading'
import GridContainer from '../../../containers/grid-container';
import Card from '../../../components/simple/card';
import SceletoneCard from '../../../components/ui/sceletone/SceletoneCard';

interface PopularGamesProps {
    categoryId: number
    heading: {
        title: string
        subtitle: string
    }
}
// 43
const PopularGames = ({categoryId, heading}: PopularGamesProps) => {
    const [gamesList, setGamesList] = useState<IGame[]>()
    useEffect(() => {
        const fetchPost = async () => {
            const data = await UniteService.getPosts(6, categoryId)
            setGamesList(data)
        }
        fetchPost()
    }, [])
    return (
        <section className={styles.section}>
            <Heading 
                text={heading} 
                classes={{
                    title: styles.title
                }}/>
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