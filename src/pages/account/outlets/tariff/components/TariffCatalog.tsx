import TariffCard from './TariffCard'
import styles from './styles/TariffCatalog.module.scss';
import heroyImage from '../../../../../asets/images/profile/tariff/heroy.png'
import legendImage from '../../../../../asets/images/profile/tariff/legend.png'
import titanImage from '../../../../../asets/images/profile/tariff/titan.png'
import keeperImage from '../../../../../asets/images/profile/tariff/keeper.png'

const TariffCatalog = () => {
    return (
        <div className={styles.catalog}>
            <TariffCard
                title='Герой'
                image={heroyImage}
                price={30} />
            <TariffCard
                title='Легенда'
                image={legendImage}
                price={50} />
            <TariffCard
                title='Титан'
                image={titanImage}
                price={100} />
            <TariffCard
                title='Хранитель'
                image={keeperImage}
                price={150} />
        </div>
    )
}

export default TariffCatalog