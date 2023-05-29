import { Link } from 'react-router-dom'
import Logo from '../../ui/Logo';
import Button from '../../ui/Button';
import styles from './FormAuth.module.scss';

interface FormAuthProps {
    children: JSX.Element[]
    text: {
        title: string
        button: string
        link: string
        footnote: string
    }
    link: string
}

const FormAuth = ({ children, text, link }: FormAuthProps) => {
    return (
        <>
            <Logo styles={styles.logo} />
            <h1 className={styles.title}>{text.title}</h1>
            <form className={styles.form} action="#">
                {children}
                <Button title={text.button} classes={styles.button} />
            </form>
                <p className={styles.footnote}>
                    {text.footnote}
                    <Link to={link}>{text.link}</Link>
                </p>
        </>
    )
}

export default FormAuth