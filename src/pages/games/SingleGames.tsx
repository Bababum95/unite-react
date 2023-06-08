import StartGame from '../../components/simple/start-game'
import Body from '../../containers/body'
import News from '../../containers/news'
import Suport from '../../containers/suport'
import Community from './components/Community'
import GamesList from './components/GamesList'
import Ruls from './components/Ruls'

const SingleGames = () => {
  return (
    <Body>
      <GamesList
        postsId={35}
        heading={{
          title: 'Одиночные игры',
          subtitle: 'Лучшие из лучших игр уже доступны для скачивания с Unite Gaming!'
        }} />
      <News />
      <Suport />
      <StartGame />
    </Body>
  )
}

export default SingleGames