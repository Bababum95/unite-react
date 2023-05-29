import styles from './styles/Checkbox.module.scss'

interface CheckboxProps {
    children: JSX.Element
}

const Checkbox = ({children}: CheckboxProps) => {
    return (
        <label className={styles.label}>
            <input className={styles.input} type="checkbox" />
            <span className={styles.span} />
            {children}
        </label>
    )
}

export default Checkbox