import StartGame from '../../../components/simple/start-game'
import Body from '../../../containers/body'
import News from '../../../containers/news'
import Suport from '../../../containers/suport'
import Voice from '../../../containers/voice'
import FirstSection from '../components/FirstSection'
import PopularGames from '../components/PopularGames'
import Content from './Content'
import Android from '../../../components/svg/Android'

const LauncherForAndroid = () => {
  return (
    <Body>
      <FirstSection
        platform='ANDROID'
        subtitle='Мобильный гейминг в Туркменистане!'
        buttons={{
          first: {
            link: ''
          },
          second: {
            text: 'Скачать с Unite Gaming',
            link: ''
          },
          third: {
            text: 'Скачать с Google Play',
            link: ''
          }
        }}
        svg={<Android />} />
      <Content />
      <PopularGames
          categoryId={43}
          heading={{
            title: 'Популярные игры на Android',
            subtitle: 'Обожаемые всеми сетевые игры на любой вкус!'
          }} />
      <Voice />
      <News />
      <Suport />
      <StartGame />
    </Body>
  )
}

export default LauncherForAndroid