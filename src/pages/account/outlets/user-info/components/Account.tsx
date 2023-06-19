import LayoutBlock from '../../components/LayoutBlock'
import Clipboard from './Clipboard'
import styles from './styles/Account.module.scss';

const Account = () => {
    return (
        <LayoutBlock
            title='ИНФОРМАЦИЯ АККАУНТА'
            link={{
                path: '/account/history',
                text: 'Зачем мне это?'
            }}>
            <div className={styles.body}>
                <Clipboard value='UG-45-qwer' label='Мой ID' />
                <Clipboard value='XXXX-XXXX-XXXX' label='Реферальный код' />
            </div>
        </LayoutBlock>
    )
}

export default Account