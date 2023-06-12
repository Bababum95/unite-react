import Deposit from './components/Deposit'
import History from './components/History'
import PromoCode from './components/PromoCode'
import Safety from './components/Safety'
import Tariff from './components/TariffBlock'
import UserInfo from './components/UserInfo'

const Review = () => {
  return (
    <>
      <PromoCode />
      <Deposit />
      <UserInfo />
      <Safety />
      <Tariff />
      <History />
    </>
  )
}

export default Review