import { Link } from 'react-router-dom';
import styles from './footer.module.scss';
import FooterMenu from '../../components/ordinary/menu/FooterMenu';
import Logo from '../../components/ui/Logo'
import { IMenuStyles } from '../../core/interfaces/links.interfaces';
import isqIcon from '../../asets/images/social-icons/isq.svg'
import instagramIcon from '../../asets/images/social-icons/instagram.svg'
import tikTokIcon from '../../asets/images/social-icons/tiktok.svg'

const Footer = () => {
    const clases: IMenuStyles = {
        menu: styles.footer__menu,
        link: styles.footer__link,
        submenu: styles.footer__submenu,
        sublink: styles.footer__sublink,
    }
    return (
        <footer className={styles.footer}>
            <FooterMenu styles={clases} />
            <div className={styles.footer__under}>
                <Link to="/"><Logo styles={styles.footer__logo} /></Link>
                <ul className={styles.footer__underlinks}>
                    <li>
                        <Link className={styles.footer__underlink} to="/">Правила пользования</Link>
                    </li>
                    <li>
                        <Link className={styles.footer__underlink} to="/">Политика конфиденциальности</Link>
                    </li>
                    <li>
                        <Link className={styles.footer__underlink} to="/">Контакты</Link>
                    </li>
                </ul>
                <div className={styles.footer__social}>
                    <a href="https://www.tiktok.com/@unite_gaming">
                        <img src={tikTokIcon} alt="TikTok Unite" />
                    </a>
                    <a href="https://www.instagram.com/unite.gaming_tm/">
                        <img src={instagramIcon} alt="Instagram Unite" />
                    </a>
                    <a href="https://icq.im/UniteGaming">
                        <img src={isqIcon} alt="ISQ Unite" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer