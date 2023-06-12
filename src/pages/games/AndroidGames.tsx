import StartGame from '../../components/simple/start-game'
import Body from '../../containers/body'
import News from '../../containers/news'
import Suport from '../../containers/suport'
import GamesList from './components/GamesList'

const AndroidGames = () => {
  return (
    <Body>
      <GamesList
        postsId={75}
        heading={{
          title: 'Игры на Андроид',
          subtitle: 'Лучшие из лучших игр уже доступны для скачивания с Unite Gaming!'
        }} />
      <News />
      <Suport />
      <StartGame />
    </Body>
  )
}

export default AndroidGames