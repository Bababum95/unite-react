import styles from './styles/Subheading.module.scss'

const Subheading = (props:{text: string}) => {
    return (
        <h4 className={styles.subheading}>{props.text}</h4>
    )
}

export default Subheading