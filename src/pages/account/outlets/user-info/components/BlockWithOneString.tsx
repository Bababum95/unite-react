import LayoutBlock from '../../components/LayoutBlock'
import FieldValuePair from '../../components/FieldValuePair';
import styles from './styles/BlockWithOneString.module.scss';

interface BlockWithOneStringProps {
    handleClick: () => void;
    title: string
    value: string
    label: string
}
const BlockWithOneString = ({ handleClick, label, value, title }: BlockWithOneStringProps) => {
    return (
        <LayoutBlock
            title={title}
            button={{ handleClick }} >
            <div className={styles.body}>
                    <FieldValuePair {...{value, label}} />
            </div>
        </LayoutBlock>
    )
}

export default BlockWithOneString