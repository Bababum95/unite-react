import StartGame from '../../components/simple/start-game'
import Body from '../../containers/body'
import News from '../../containers/news'
import Suport from '../../containers/suport'
import Community from './components/Community'
import GamesList from './components/GamesList'
import Ruls from './components/Ruls'

const NetworkGames = () => {
  return (
    <Body>
      <GamesList
        postsId={69}
        heading={{
          title: 'Сетевые игры',
          subtitle: 'Лучшие из лучших игр уже доступны для скачивания с Unite Gaming!'
        }} />
      <Suport />
      <StartGame />
    </Body>
  )
}

export default NetworkGames