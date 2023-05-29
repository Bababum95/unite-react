import styles from './FormAuth.module.scss';

const MainAuth = (props: {children: JSX.Element | JSX.Element[] }) => {
    return (
        <main className={styles.main}>
            {props.children}
        </main>
    )
}

export default MainAuth