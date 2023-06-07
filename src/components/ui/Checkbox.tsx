import styles from './styles/Checkbox.module.scss'

interface CheckboxProps {
    children: JSX.Element
    register?: any
}

const Checkbox = ({children, register}: CheckboxProps) => {
    return (
        <label className={styles.label}>
            <input {...register('checkbox')} className={styles.input} type="checkbox" />
            <span className={styles.span} />
            {children}
        </label>
    )
}

export default Checkbox