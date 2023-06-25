import {Dispatch, FC, SetStateAction, useState} from 'react'
import { ITariffPopup } from '../../../../../core/interfaces/tariffPopup.interfaces';
import classNames from 'classnames';
import Button from '../../../../../components/ui/Button'
import styles from './styles/CardKey.module.scss';

interface CardKeyProps {
    image: string
    title: string
    pass: string
    description: string
    setPopup: Dispatch<SetStateAction<ITariffPopup | null>> 
}

const CardKey: FC<CardKeyProps> = ({image, title, pass, description, setPopup}) => {
    const [showPass, setShowPass] = useState<boolean>(false)
    const openPopupWithDescription = () => {
        setPopup({
            title: title,
            text: description
        })
    }
  return (
    <div className={styles.card}>
        <img className={styles.image} src={image} alt={title} />
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.wrapper}>
            <p className={styles.label}>Пароль:</p>
            <p className={styles.pass}>{showPass? pass: '***********'}</p>
            <button
                className={classNames(styles.show, {[styles.open]: showPass})}
                onClick={() => setShowPass(!showPass)} />
            <button className={styles.edit}/>
        </div>
            <Button handleClick={openPopupWithDescription} classes={styles.greyBtn} title='Подробнее' />
            <Button classes={styles.button} title='Скачать' />
    </div>
  )
}

export default CardKey