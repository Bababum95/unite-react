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
        <GamesList />
        <Community />
        <Ruls />
        <News />
        <Suport />
        <StartGame />
    </Body>
  )
}

export default ServerGames