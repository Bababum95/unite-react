import FieldValuePair from '../../components/FieldValuePair';
import FieldValuePairWrapper from '../../components/FieldValuePairWrapperWithUnderLine';
import styles from './styles/Clipboard.module.scss';

interface ClipboardProps {
  value: string;
  label: string;
}

const Clipboard = ({value, label}: ClipboardProps) => {
    const clipboardHundler = () => {
        navigator.clipboard.writeText(value)
    }
  return (
    <FieldValuePairWrapper>
      <FieldValuePair {...{value, label}}/>
      <button
        className={styles.button}
        onClick={clipboardHundler} />
    </FieldValuePairWrapper>
  )
}

export default Clipboard