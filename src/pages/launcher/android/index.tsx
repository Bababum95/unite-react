import StartGame from '../../../components/simple/start-game'
import Body from '../../../containers/body'
import News from '../../../containers/news'
import Suport from '../../../containers/suport'
import Voice from '../../../containers/voice'
import FirstSection from '../components/FirstSection'
import PopularGames from '../components/PopularGames'
import Content from './components/Content'

const LauncherForAndroid = () => {
  return (
    <Body>
        <FirstSection />
        <Content />
        <PopularGames />
        <Voice />
        <News />
        <Suport />
        <StartGame />
    </Body>
  )
}

export default LauncherForAndroid