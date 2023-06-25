import { Dispatch, FC, SetStateAction } from 'react';
import { ITariffPopup } from '../../../../../core/interfaces/tariffPopup.interfaces';
import { descriptionKeyForAndroid, descriptionKeyForPC, descriptionKeySteam } from './data/descriptions';
import uniteGamingforAndroidImage from '../../../../../asets/images/profile/key/image 27.png'
import LayoutBlock from '../../components/LayoutBlock'
import CardKey from './CardKey';
import styles from './styles/Key.module.scss';

interface KeyProps {
    setPopup: Dispatch<SetStateAction<ITariffPopup | null>>
}

const Key: FC<KeyProps> = ({ setPopup }) => {
    return (
        <LayoutBlock title='Ключи'>
            <p className={styles.important}>
                !ВАЖНО! Логин ключа является ID пользователя зарегистрированного аккаунта в формате “UG-45-qwer”
            </p>
            <div className={styles.container}>
                <CardKey
                    setPopup={setPopup}
                    description={descriptionKeyForPC}
                    image={uniteGamingforAndroidImage}
                    title='Unite Gaming for PC'
                    pass='Пароль' />
                <CardKey
                    setPopup={setPopup}
                    description={descriptionKeySteam}
                    image={uniteGamingforAndroidImage}
                    title='Ключ -Steam'
                    pass='Пароль' />
                <CardKey
                    setPopup={setPopup}
                    description={descriptionKeyForAndroid}
                    image={uniteGamingforAndroidImage}
                    title='Unite Gaming for Android'
                    pass='Пароль' />
            </div>
        </LayoutBlock>
    )
}

export default Key