import { useEffect, useState } from 'react';
import classNames from 'classnames';
import LayoutBlock from '../../components/LayoutBlock'
import styles from './styles/Safety.module.scss';
import { calculateCircleLength } from '../../../../../asets/function/calculateCircleLength';

const Safety = () => {
    const [isApproved, setIsApproved] = useState<Record<string, boolean>>({
        number: false,
        email: false,
        other: false
    })
    const [procent, setProcent] = useState<number>(25)
    useEffect(() => {
        let trueCount = 0;
        for (let key in isApproved) {
            if (isApproved[key] === true) {
                trueCount++;
            }
        }
        setProcent(trueCount * 25 + 25)
    }, [isApproved])

    const handleChange = (name: 'number' | 'email' | 'other') => {
        setIsApproved({ ...isApproved, [name]: true });
    };
    return (
        <LayoutBlock
            title='Безопасность'
            link={{
                text: 'Безопасность >',
                path: '/account/safety'
            }} >
            <div className={styles.body}>
                <div className={styles.value}>
                    <svg className={styles.progress}>
                        <circle r={106} cx={110} cy={110} />
                        <circle r={106} cx={110} cy={110}
                            style={{
                                strokeDashoffset: calculateCircleLength(procent)
                            }} />
                    </svg>
                    <div className={styles.number}>
                        <h5 className={styles.procent}>{procent}%</h5>
                    </div>
                </div>
                <div className={styles.data}>
                    <div className={classNames(styles.wrapper, styles.approved)} >
                        <div className={styles.status} />
                        <p className={styles.label}>Регистрация аккаунта Пройдена</p>
                    </div>
                    <div
                        className={classNames(styles.wrapper, { [styles.approved]: isApproved.number })}
                        onClick={() => handleChange('number')} >
                        <div className={styles.status} />
                        <p className={styles.label}>Подтвердить Номер телефона</p>
                    </div>
                    <div
                        className={classNames(styles.wrapper, { [styles.approved]: isApproved.email })}
                        onClick={() => handleChange('email')} >
                        <div className={styles.status} />
                        <p className={styles.label}>Подтвердить адрес электронной почты</p>
                    </div>
                    <div
                        className={classNames(styles.wrapper, { [styles.approved]: isApproved.other })}
                        onClick={() => handleChange('other')} >
                        <div className={styles.status} />
                        <p className={styles.label}>Дополнительные поля не заполнены</p>
                    </div>
                </div>
            </div>
        </LayoutBlock >
    )
}

export default Safety