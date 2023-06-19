import { useEffect, useState, Dispatch, SetStateAction, FormEvent } from 'react'
import { useForm } from '../../../../../core/hooks/useForm'
import PopupWithForm from '../../components/PopupWithForm'
import LabelForPopupInput from '../../components/LabelForPopupInput'
import PopupInput from '../../components/PopupInput'
import PopupSelect from '../../components/PopupSelect'
import { optionsLanguage, optionsCity, optionsSex, optionsFavorite } from '../../../../../asets/data/options'

interface UserPopupsProps {
    close: () => void
    popupIsOpen: {
        [key: string]: boolean
    }
    userValue: {
        [key: string]: string
    }
    setUserValue: Dispatch<SetStateAction<{ [key: string]: string }>>
}

const UserPopups = ({ close, popupIsOpen, userValue, setUserValue }: UserPopupsProps) => {
    const [title, seTitle] = useState<string>('')
    const { values, handleChange, setValues } = useForm(userValue)
    useEffect(() => {
        setValues(userValue)
        if (popupIsOpen.email) {
            seTitle('Электронная почта')
        }
        if (popupIsOpen.phone) {
            seTitle('Номер телефона')
        }
        if (popupIsOpen.lang) {
            seTitle('РАССЫЛКА от Unite gaming')
        }
        if (popupIsOpen.private) {
            seTitle('Личная информация')
        }
        if (popupIsOpen.difrent) {
            seTitle('Дополнительные поля')
        }
    }, [popupIsOpen])

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        setUserValue(values)
        close()
    }

    return (
        <PopupWithForm
            isOpen={popupIsOpen.email || popupIsOpen.phone || popupIsOpen.lang || popupIsOpen.private || popupIsOpen.difrent}
            handleClose={close}
            title={title}
            handleSubmit={handleSubmit} >
            <>
                {popupIsOpen.private && (
                    <>
                        <LabelForPopupInput name='Имя'>
                            <PopupInput
                                type='text'
                                name='name'
                                placeholder='Введите имя'
                                value={values.name}
                                handleChange={handleChange} />
                        </LabelForPopupInput>
                        <LabelForPopupInput name='Город'>
                            <PopupSelect
                                options={optionsCity}
                                values={values}
                                name='city'
                                setValues={setValues} />
                        </LabelForPopupInput>
                    </>
                )}
                {popupIsOpen.email && (
                    <LabelForPopupInput name='Электронная почта'>
                        <PopupInput
                            type='email'
                            name='email'
                            placeholder='Введите адрес электронной почты'
                            value={values.email}
                            handleChange={handleChange} />
                    </LabelForPopupInput>
                )}
                {popupIsOpen.phone && (
                    <LabelForPopupInput name='Номер телефона'>
                        <PopupInput
                            type='phone'
                            name='phone'
                            placeholder='Введите номер телефона'
                            value={values.phone}
                            handleChange={handleChange} />
                    </LabelForPopupInput>
                )}
                {popupIsOpen.lang && (
                    <LabelForPopupInput name='Предпочитаемый язык переписки'>
                        <PopupSelect
                            options={optionsLanguage}
                            values={values}
                            name='lang'
                            setValues={setValues} />
                    </LabelForPopupInput>
                )}
                {popupIsOpen.difrent && (
                    <>
                        <LabelForPopupInput name='Мой пол'>
                            <PopupSelect
                                options={optionsSex}
                                values={values}
                                name='sex'
                                setValues={setValues} />
                        </LabelForPopupInput>
                        <LabelForPopupInput name='Аккаунт в Instagram'>
                            <PopupInput
                                type='text'
                                name='instagram'
                                placeholder='Введите аккаунт в Instagram'
                                value={values.instagram}
                                handleChange={handleChange} />
                        </LabelForPopupInput>
                        <LabelForPopupInput name='Аккаунт в Tik -Tok'>
                            <PopupInput
                                type='text'
                                name='tiktok'
                                placeholder='Введите аккаунт в Tik -Tok'
                                value={values.tiktok}
                                handleChange={handleChange} />
                        </LabelForPopupInput>
                        <LabelForPopupInput name='Любимый сервис'>
                            <PopupSelect
                                options={optionsFavorite}
                                values={values}
                                name='favorite'
                                setValues={setValues} />
                        </LabelForPopupInput>
                    </>
                )}
            </>
        </PopupWithForm>
    )
}

export default UserPopups