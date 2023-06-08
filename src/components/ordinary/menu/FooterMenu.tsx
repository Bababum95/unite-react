import { IMenuStyles } from '../../../core/interfaces/links.interfaces'
import SubMenu from './SubMenu';
import { menulinks } from '../../../router/menuLinks'

interface FooterMenuProps {
    styles: IMenuStyles
}

const FooterMenu = ({ styles }: FooterMenuProps) => {
    return (
        <ul className={styles.menu}>
            <SubMenu styles={styles} menulinks={menulinks.main} mainLink='Главная' />
            <SubMenu styles={styles} menulinks={menulinks.ourProducts} mainLink='Наши продукты' />
            <SubMenu styles={styles} menulinks={menulinks.games} mainLink='Игры' />
            <SubMenu styles={styles} menulinks={menulinks.about} mainLink='О компании' />
        </ul>
    )
}

export default FooterMenu