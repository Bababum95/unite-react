import {FormEvent} from 'react'
import Button from "../../../../components/ui/Button"
import LayoutBlock from "./LayoutBlock"
import styles from './styles/PopupWithForm.module.scss';
import Popup from "./Popup";

interface PopupWithFormProps {
    children: JSX.Element | JSX.Element[]
    title: string
    isOpen: boolean
    handleClose: () => void
    handleSubmit: (evt: FormEvent<HTMLFormElement>) => void
}

const PopupWithForm = ({ title, children, isOpen, handleClose, handleSubmit }: PopupWithFormProps) => {
    return (
        <Popup {...{isOpen, handleClose}}>
            <LayoutBlock {...{ title }}>
                <form className={styles.form} onSubmit={(evt) => handleSubmit(evt)}>
                    {children}
                    <div className={styles.buttons}>
                        <Button title='Сохранить' />
                        <Button
                            title='Отмена'
                            type='button'
                            classes={styles.buttonGray}
                            handleClick={handleClose} />
                    </div>
                </form>
            </LayoutBlock>
        </Popup>
    )
}

export default PopupWithForm