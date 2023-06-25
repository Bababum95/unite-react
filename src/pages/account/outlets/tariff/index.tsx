import { useState } from 'react'
import { ITariffPopup } from '../../../../core/interfaces/tariffPopup.interfaces'
import CurrentTariff from './components/CurrentTariff'
import Key from './components/Key'
import TariffCatalog from './components/TariffCatalog'
import TariffPopup from './components/TariffPopup'

const Tariff = () => {
  const [popup, setPopup] = useState<ITariffPopup | null>(null)
  const closePopup = () => {
    setPopup(null)
  }
  return (
    <>
      <Key setPopup={setPopup} />
      <CurrentTariff isActive={true} />
      <TariffCatalog />
      <TariffPopup handleClose={closePopup} data={popup} />
    </>
  )
}

export default Tariff