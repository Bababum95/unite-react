import StartGame from '../../components/simple/start-game'
import Body from '../../containers/body'
import Suport from '../../containers/suport'
import Content from './components/Content'
import FirstScreen from './components/FirstScreen'

const Mumble = () => {
  return (
    <Body>
      <FirstScreen
        heading={{
          title: 'Mumble',
          subtitle: 'Общайтесь, болтайте и разговаривайте с друзьями!'
        }} />
      <Content name='Mumble' ipList={['95.85.126.225']} />
      <Suport />
      <StartGame />
    </Body>
  )
}

export default Mumble