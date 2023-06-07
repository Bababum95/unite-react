import { Link } from "react-router-dom";
import Logo from "../../../components/ui/Logo"
import Button from "../../../components/ui/Button"
import previewImage from '../../../asets/images/home/spider-man.jpg'
import Android from "../../../components/svg/Windows";
import Windows from "../../../components/svg/Android";
import styles from './styles/FirstScreen.module.scss';

const FirstScreen = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Logo styles={styles.logo} />
                <h1 className={styles.title}>Первая платформа для геймеров в Туркменистане!</h1>
                <p className={styles.text}>Пройди регистрацию, скачай лаунчер и комфортно играй в лучшие сетевые игры
                    без пинга на PC и Android! </p>
                <div className={styles.buttons}>
                    <Link to="/sign-up">
                        <Button classes={styles.button} title="Регистрация" />
                    </Link>
                    <p className={styles.subtext}>Доступно:</p>
                    <Link to='/launcheer-for-pc'><Android /></Link>
                    <Link to="/launcheer-for-android"><Windows /></Link>
                </div>
            </div>
            <div className={styles.preview}>
                <div className={styles.background}></div>
                <img className={styles.image} src={previewImage} alt="человек паук" />
            </div>
        </section>
    )
}

export default FirstScreen