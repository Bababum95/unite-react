import LayoutBlock from '../../components/LayoutBlock'
import styles from './styles/Deposit.module.scss';
import upCoin from '../../../../../asets/images/profile/coins/up-coin.png'
import unCoin from '../../../../../asets/images/profile/coins/un-coin.png'
import ticket from '../../../../../asets/images/profile/coins/ticket.png'

const Deposit = () => {
    return (
        <LayoutBlock title='кошелёк unite gaming'
            link={{
                text: 'Пополнить баланс >',
                path: '/account/balance'
            }} >
            <div className={styles.body}>
                <div className={styles.wrapper}>
                    <img className={styles.image} src={upCoin} alt="up coin" />
                    <span className={styles.count}>140 TMT</span>
                </div>
                <div className={styles.wrapper}>
                    <img className={styles.image} src={unCoin} alt="un coin" />
                    <span className={styles.count}>200</span>
                </div>
                <div className={styles.wrapper}>
                    <img className={styles.image} src={ticket} alt="ticket" />
                    <span className={styles.count}>1</span>
                </div>
            </div>
        </LayoutBlock>
    )
}

export default Deposit