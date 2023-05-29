import styles from './styles/VerticalBlockContainer.module.scss'

const VerticalBlockContainer = (props: {children: JSX.Element[]}) => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}

export default VerticalBlockContainer