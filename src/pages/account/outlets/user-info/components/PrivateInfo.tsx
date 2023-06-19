import LayoutBlock from '../../components/LayoutBlock'
import FieldValuePair from './FieldValuePair';
import FieldValuePairWrapperWithUnderLine from './FieldValuePairWrapperWithUnderLine';
import styles from './styles/PrivateInfo.module.scss';

interface PrivateInfoProps {
    handleClick: () => void;
    name: string
    city: string
}

const PrivateInfo = ({ handleClick, name, city }: PrivateInfoProps) => {
    return (
        <LayoutBlock
            title='ЛИЧНАЯ ИНФОРМАЦИЯ'
            button={{ handleClick }} >
            <div className={styles.body}>
                <FieldValuePairWrapperWithUnderLine>
                    <FieldValuePair value={name} label='Имя' />
                </FieldValuePairWrapperWithUnderLine>
                <FieldValuePairWrapperWithUnderLine>
                    <FieldValuePair value={city} label='Город' />
                </FieldValuePairWrapperWithUnderLine>
            </div>
        </LayoutBlock>
        )
}

export default PrivateInfo