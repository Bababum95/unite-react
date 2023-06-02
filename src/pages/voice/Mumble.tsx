import Body from '../../containers/body'
import FirstScreen from './components/FirstScreen'

const Mumble = () => {
  return (
    <Body>
    <FirstScreen 
     heading={{
      title: 'Mumble',
      subtitle: 'Общайтесь, болтайте и разговаривайте с друзьями!'
    }} />
    </Body>
  )
}

export default Mumble