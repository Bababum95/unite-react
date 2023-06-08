import { Link } from 'react-router-dom';
import { IMenuStyles } from '../../../core/interfaces/links.interfaces'
import SubMenu from './SubMenu';
import { menulinks } from '../../../router/menuLinks'

interface HeaderMenuProps {
    styles: IMenuStyles
}

const HeaderMenu = ({ styles }: HeaderMenuProps) => {
    return (
        <ul className={styles.menu}>
            <li><Link to="/" className={styles.home}>Главная</Link></li>
            <SubMenu styles={styles} menulinks={menulinks.ourProducts} mainLink='Наши продукты' />
            <SubMenu styles={styles} menulinks={menulinks.games} mainLink='Игры' />
            <li><Link to="/" className={styles.link}>Донат</Link></li>
            <SubMenu styles={styles} menulinks={menulinks.about} mainLink='О нас' />
            <li><Link to="/" className={styles.link}>Партнёры</Link></li>
            <li><Link to="/" className={styles.link}>Сообщество</Link></li>
            <li><Link to="/" className={styles.link}>Поддержка</Link></li>
        </ul>
    )
}

export default HeaderMenu