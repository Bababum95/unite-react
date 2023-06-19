import { useState } from 'react'
import { userData } from '../../../../asets/data/userData'
import Account from './components/Account'
import PrivateInfo from './components/PrivateInfo'
import BlockWithOneString from './components/BlockWithOneString'
import Difrent from './components/Difrent'
import UserPopups from './components/UserPopups'

const UserInfo = () => {
  const [userValue, setUserValue] = useState(userData)
  const [popupIsOpen, setPopupIsOpen] = useState({
    private: false,
    email: false,
    phone: false,
    lang: false,
    difrent: false
  })
  const openPopup = (name: string): void => {
    setPopupIsOpen({ ...popupIsOpen, [name]: true })
  }
  const closeAllPopups = (): void => {
    setPopupIsOpen({
      private: false,
      email: false,
      phone: false,
      lang: false,
      difrent: false
    })
  }
  return (
    <>
      <Account />
      <PrivateInfo
        name={userValue.name}
        city={userValue.city}
        handleClick={() => openPopup('private')} />
      <BlockWithOneString
        title='Электронная почта'
        handleClick={() => openPopup('email')}
        value={userValue.email}
        label='Электронная почта:' />
      <BlockWithOneString
        title='Номер телефона'
        handleClick={() => openPopup('phone')}
        value={userValue.phone}
        label='Номер телефона:' />
      <BlockWithOneString
        title='РАССЫЛКА ОТ UNITE GAMING'
        handleClick={() => openPopup('lang')}
        value={userValue.lang}
        label='Предпочитаемый язык переписки:' />
      <Difrent
        sex={userValue.sex}
        instagram={userValue.instagram}
        tiktok={userValue.tiktok}
        favorite={userValue.favorite}
        handleClick={() => openPopup('difrent')} />
      <UserPopups
        userValue={userValue}
        setUserValue={setUserValue}
        popupIsOpen={popupIsOpen}
        close={closeAllPopups} />
    </>
  )
}

export default UserInfo