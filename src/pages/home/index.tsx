import FirstScreen from "./components/FirstScreen"
import Industry from "./components/Industry"
import Products from "./components/Products"
import Achievements from './components/Achievements'
import News from "../../containers/news"
import Social from "./components/Social"
import Other from "./components/Other"
import StartGame from "../../components/simple/start-game"
import Body from "../../containers/body"

const Home = () => {
    return (
        <Body>
            <FirstScreen />
            <Industry />
            <Products />
            <Achievements />
            <News />
            <Social />
            <Other />
            <StartGame />
        </Body>
    )
}

export default Home