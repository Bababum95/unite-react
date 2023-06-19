import styles from './styles/FieldValuePair.module.scss';

interface FieldValuePairProps {
    value: string;
    label: string;
  }

const FieldValuePair = ({value, label}: FieldValuePairProps) => {
    return (
        <>
            <p className={styles.label}>{label}</p>
            <p className={styles.value}>{value}</p>
        </>
    )
}

export default FieldValuePair