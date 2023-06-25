import LayoutBlock from '../../components/LayoutBlock'
import FieldValuePair from '../../components/FieldValuePair';
import styles from './styles/Difrent.module.scss';

interface DifrentProps {
    handleClick: () => void;
    sex: string
    instagram: string
    tiktok:string
    favorite: string
}

const Difrent = ({handleClick, sex, instagram, tiktok, favorite}:DifrentProps) => {
    return (
        <LayoutBlock
            title='ДОПОЛНИТЕЛЬНЫЕ ПОЛЯ'
            button={{ handleClick }} >
            <div className={styles.body}>
                <FieldValuePair
                    value={sex}
                    label='Мой пол' />
                <FieldValuePair
                    value={instagram}
                    label='Аккаунт в Instagram' />
                <FieldValuePair
                    value={tiktok}
                    label='Аккаунт в Tik-Tok' />
                <FieldValuePair
                    value={favorite}
                    label='Любимый сервис в Unite Gaming' />
            </div>
        </LayoutBlock>
    )
}

export default Difrent