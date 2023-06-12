import StartGame from '../../components/simple/start-game'
import HorizontalBlock from '../../containers/block/HorizontalBlock'
import Body from '../../containers/body'
import Suport from '../../containers/suport'
import GamesList from './components/GamesList'
import styles from './components/styles/NetworkGames.module.scss';
import serverGamesImage from '../../asets/images/home/servergame.png'


const NetworkGames = () => {
  return (
    <Body>
      <GamesList
        postsId={69}
        heading={{
          title: 'Сетевые игры',
          subtitle: 'Лучшие из лучших игр уже доступны для скачивания с Unite Gaming!'
        }} />
      <HorizontalBlock textRight={false} style={styles.card} textMaxWidth={380}
        path='/server-games'
        text={{
          title: 'Серверные игры',
          paragraph: 'Не нашли желаемой игры? Возможно она находится в другой вкладке!',
          link: 'Просмотреть серверные игры >'
        }} >
        <img src={serverGamesImage} className={styles.image} />
      </HorizontalBlock>
      <Suport />
      <StartGame />
    </Body>
  )
}

export default NetworkGames