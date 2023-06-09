import StartGame from '../../components/simple/start-game'
import Body from '../../containers/body'
import News from '../../containers/news'
import Suport from '../../containers/suport'
import Community from './components/Community'
import GamesList from './components/GamesList'
import Ruls from './components/Ruls'

const ServerGames = () => {
  return (
    <Body>
      <GamesList
        postsId={57}
        heading={{
          title: 'Серверные игры',
          subtitle: 'Лучшие из лучших игр уже на серверах Unite Gaming!'
        }} />
      <Community />
      <Ruls />
      <News />
      <Suport />
      <StartGame />
    </Body>
  )
}

export default ServerGames