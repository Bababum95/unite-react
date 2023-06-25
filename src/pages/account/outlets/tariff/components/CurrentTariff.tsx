import { FC } from 'react';
import FieldValuePair from '../../components/FieldValuePair'
import FieldValuePairWrapperWithUnderLine from '../../components/FieldValuePairWrapperWithUnderLine'
import LayoutBlock from '../../components/LayoutBlock'
import styles from './styles/CurrentTariff.module.scss';

interface CurrentTariffProps {
    isActive: boolean
}

const CurrentTariff: FC<CurrentTariffProps> = ({isActive}) => {
    return (
        <LayoutBlock
            title='Текущий тариф'
            link={{
                path: '',
                text: 'Сменить тариф >'
            }} >
            <div className={styles.body}>
                <FieldValuePairWrapperWithUnderLine>
                    <FieldValuePair
                        value='HERO - 30ТМТ/месяц'
                        label='Текущий тариф' />
                </FieldValuePairWrapperWithUnderLine>
                <FieldValuePairWrapperWithUnderLine>
                    <FieldValuePair
                        classValue={isActive? styles.active : styles.notActive}
                        value={isActive? 'Активен' : 'Не активен'}
                        label='Статус' />
                </FieldValuePairWrapperWithUnderLine>
                <FieldValuePairWrapperWithUnderLine>
                    <FieldValuePair
                        classValue={styles.data}
                        value='28.06.2023'
                        label='Дата окончания тарифа' />
                </FieldValuePairWrapperWithUnderLine>
            </div>
        </LayoutBlock>
    )
}

export default CurrentTariff