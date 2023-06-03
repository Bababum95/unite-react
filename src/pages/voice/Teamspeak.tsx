import StartGame from '../../components/simple/start-game'
import Body from '../../containers/body'
import Suport from '../../containers/suport'
import Content from './components/Content'
import FirstScreen from './components/FirstScreen'

const Teamspeak = () => {
  return (
    <Body>
      <FirstScreen
        heading={{
          title: 'Teamspeak 3',
          subtitle: 'Лучшее решение для голосового общения в играх!'
        }} />
      <Content name='Teamspeak' ipList={[' 95.85.127.217', '95.85.126.226', '95.85.126.176', '95.85.126.225']} />
      <Suport />
      <StartGame />
    </Body>
  )
}

export default Teamspeak