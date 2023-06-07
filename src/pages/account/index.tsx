import { NavLink, Outlet } from 'react-router-dom'
import { pacmanImage, waletImage, tariffImage, historyImage, questionImage } from './icons';
import Button from '../../components/ui/Button';
import Body from '../../containers/body';
import styles from './Profile.module.scss';



const Account = () => {
    return (
        <Body>
            <main className={styles.main}>
                <div className={styles.menu}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <NavLink to='profile' className={({ isActive }) => `${isActive && styles.active}`}>
                                <img src={pacmanImage} alt="packman" />
                                <p>Профиль пользователя</p>
                            </NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink to='balance' className={({ isActive }) => `${isActive && styles.active}`}>
                                <img src={waletImage} alt="packman" />
                                <p>Мой баланс</p>
                            </NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink to='tariff' className={({ isActive }) => `${isActive && styles.active}`}>
                                <img src={tariffImage} alt="packman" />
                                <p>Тарифы</p>
                            </NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink to='history' className={({ isActive }) => `${isActive && styles.active}`}>
                                <img src={historyImage} alt="packman" />
                                <p>История всех моих транзакций</p>
                            </NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink to='suport' className={({ isActive }) => `${isActive && styles.active}`}>
                                <img src={questionImage} alt="packman" />
                                <p>Помощь и поддержка</p>
                            </NavLink>
                        </li>
                    </ul>
                    <NavLink to='/' className={styles.button}>
                        <Button fullPage={true} title='Поддержка' />
                    </NavLink>
                </div>
                <div className={styles.content}>
                    <Outlet />
                </div>
            </main>
        </Body>
    )
}

export default Account