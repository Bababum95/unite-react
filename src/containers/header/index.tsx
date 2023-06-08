import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames'
import { IMenuStyles } from '../../core/interfaces/links.interfaces';
import HeaderMenu from '../../components/ordinary/menu/HeaderMenu';
import HeaderButton from './components/HeaderButton';
import Logo from '../../components/ui/Logo';
import styles from './header.module.scss';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)
    let burgerClases = classNames(styles.header__burger, { [styles.active]: isMenuOpen })
    let listClases = classNames(styles.header__list, { [styles.active]: isMenuOpen })
    const clases: IMenuStyles = {
        menu: styles.header__menu,
        link: styles.header__link,
        submenu: styles.header__submenu,
        sublink: styles.header__sublink,
        home: styles.header__link_home,
        arow: styles.header__arow,
        open: styles.active,
    }
    return (
        <header className={styles.header}>
            <div className={styles.header__wraper}>
                <Link to="/"><Logo styles={styles.header__logo} /></Link>
                <nav className={listClases}>
                    <HeaderMenu styles={clases} />
                    <HeaderButton
                        linkStyle={styles.header__signBtn_phone}
                        buttonStyle={styles.header__signBtn_phone} />
                </nav>
                {/* <select className={styles.header__lang} name="lang">
                    <option className={styles.header__lang_ru} defaultValue="ru" selected>RU</option>
                    <option className={styles.header__lang_ru} defaultValue="ru">RU</option>
                </select> */}
                <button className={burgerClases} onClick={() => setMenuOpen(!isMenuOpen)}></button>
                <HeaderButton linkStyle={styles.header__signBtn} buttonStyle={styles.header__button} />
            </div>
        </header>
    )
}

export default Header