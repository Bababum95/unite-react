import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { pacmanImage, waletImage, tariffImage, historyImage, questionImage, reductionImage } from './icons';
import Button from '../../components/ui/Button';
import Body from '../../containers/body';
import styles from './Profile.module.scss';
import Title from '../../components/ui/Title';
import LastNews from './LastNews';


const Account = () => {
    const [title, setTitle] = useState<string>('')
    const location = useLocation()
    useEffect(() => {
        const link = document.querySelector(`.${styles.active}`)
        link?.textContent && setTitle(link.textContent)
    },[location])
    return (
        <Body>
            <Title text={title} style={styles.title} />
            <div className={styles.main}>
                <div className={styles.menu}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <NavLink to='/account' end className={({ isActive }) => `${isActive && styles.active}`}>
                                <img src={reductionImage} alt="reduction" />
                                <p>Обзор учётной записи</p>
                            </NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink to='user-info' className={({ isActive }) => `${isActive && styles.active}`}>
                                <img src={pacmanImage} alt="packman" />
                                <p>Информация о записи</p>
                            </NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink to='balance' className={({ isActive }) => `${isActive && styles.active}`}>
                                <img src={waletImage} alt="packman" />
                                <p>Пополнить баланс</p>
                            </NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink to='tariff' className={({ isActive }) => `${isActive && styles.active}`}>
                                <img src={tariffImage} alt="packman" />
                                <p>Тарифы и ключи</p>
                            </NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink to='history' className={({ isActive }) => `${isActive && styles.active}`}>
                                <img src={historyImage} alt="packman" />
                                <p>История транзакций</p>
                            </NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink to='suport' className={({ isActive }) => `${isActive && styles.active}`}>
                                <img src={questionImage} alt="packman" />
                                <p>Помощь</p>
                            </NavLink>
                        </li>
                    </ul>
                    <NavLink to='/' className={styles.button}>
                        <Button fullPage={true} title='Поддержка' />
                    </NavLink>
                    <LastNews />
                </div>
                <div className={styles.content}>
                    <Outlet />
                </div>
            </div>
        </Body>
    )
}

export default Account