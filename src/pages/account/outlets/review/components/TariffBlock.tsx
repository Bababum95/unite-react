import LayoutBlock from "../../components/LayoutBlock"
import Tariff from "./Tariff";
import styles from './styles/Tariff.module.scss';
import heroy from '../../../../../asets/images/profile/tariff/heroy.png'
import keeper from '../../../../../asets/images/profile/tariff/keeper.png'
import legend from '../../../../../asets/images/profile/tariff/legend.png'
import titan from '../../../../../asets/images/profile/tariff/titan.png'


const TariffBlock = () => {
  return (
    <LayoutBlock
      title='Тарифы'
      link={{
        text: 'Ключи и Тарифы >',
        path: '/account/tariff'
      }}>
      <div className={styles.body}>
      <Tariff image={heroy} name='Герой' isActive={false} />
      <Tariff image={legend} name='Легенда' isActive={true} />
      <Tariff image={titan} name='Титан' isActive={false} />
      <Tariff image={keeper} name='Хранитель' isActive={false} />
      </div>
    </LayoutBlock>
  )
}

export default TariffBlock