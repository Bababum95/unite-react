import { useState } from 'react';
import classNames from 'classnames'
import { Link } from 'react-router-dom';
import { IMenuStyles, Ilink } from '../../../core/interfaces/links.interfaces'


interface SubMenuProps {
    styles: IMenuStyles
    menulinks: Ilink[]
    mainLink: string
}

const SubMenu = ({ styles, menulinks, mainLink }: SubMenuProps) => {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const menuClass = classNames(styles.open? {[styles.open]: isMenuOpen} : styles.submenu)
    
    return (
        <li className={menuClass}>
            {styles.open ? (
                <p className={styles.link} onClick={() => setMenuOpen(!isMenuOpen)} >
                    {mainLink}
                    <span className={styles.arow}></span>
                </p>
            ) : (
                <p className={styles.link}>{mainLink}</p>
            )}
            <div>
                <ul className={styles.submenu}>
                    {menulinks.map((link, index) => (
                        <Link key={index} to={link.path} className={styles.sublink}>{link.ru}</Link>

                    ))}
                </ul>
            </div>
        </li>

    )
}

export default SubMenu