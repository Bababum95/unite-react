import StartGame from '../../../components/simple/start-game'
import Windows from '../../../components/svg/Windows'
import Body from '../../../containers/body'
import News from '../../../containers/news'
import Suport from '../../../containers/suport'
import Voice from '../../../containers/voice'
import FirstSection from '../components/FirstSection'
import PopularGames from '../components/PopularGames'
import Content from './Content'
import ServerGames from './ServerGames'

const LauncherForPC = () => {
  return (
    <Body>
      <FirstSection
        platform='PC'
        subtitle='Играй с друзьями без пинга в Туркменистане!'
        buttons={{
          first: {
            link: ''
          },
          second: {
            text: 'Скачать x32',
            link: ''
          },
          third: {
            text: 'Скачать х64',
            link: ''
          }
        }}
        svg={<Windows />} />
      <Content />
      <ServerGames />
      <PopularGames
          categoryId={47}
          heading={{
            title: 'Популярные игры',
            subtitle: 'Обожаемые всеми сетевые и одиночные игры на любой вкус!'
          }} />
      <Voice />
      <News />
      <Suport />
      <StartGame />
    </Body>
  )
}

export default LauncherForPC