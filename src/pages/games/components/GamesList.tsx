import { useState, useEffect } from 'react'
import { IGame } from '../../../core/interfaces/posts.interfaces'
import { UniteService } from '../../../core/services/unite.service'
import styles from './styles/GamesList.module.scss'
import Heading from '../../../components/simple/heading'
import GameCard from './GameCard'
import SceletoneGameCard from '../../../components/ui/sceletone/SceletoneGameCard'

interface GamesListProps {
    postsId: number
    heading: {
        title: string
        subtitle: string
    }
}

const GamesList = ({ postsId, heading }: GamesListProps) => {
    const [gamesList, setGamesList] = useState<IGame[]>()
    useEffect(() => {
        const fetchPost = async () => {
            const data = await UniteService.getPosts(15, postsId)
            setGamesList(data)
        }
        fetchPost()
    }, [])
    return (
        <section className={styles.section}>
            <Heading text={heading} />
            <div className={styles.container}>
                {gamesList ? gamesList.map(game => (
                    <GameCard
                        link={game.guid.rendered}
                        imageId={game['img-game']}
                        title={game['name-game']} />
                )) : (
                    <>
                        <SceletoneGameCard />
                        <SceletoneGameCard />
                        <SceletoneGameCard />
                    </>
                )}
            </div>
        </section>
    )
}

export default GamesList