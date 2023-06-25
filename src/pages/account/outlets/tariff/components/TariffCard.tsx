import { FC, useState } from 'react';
import classNames from 'classnames';
import styles from './styles/TariffCard.module.scss';

interface TariffCardProps {
    title: string
    image: string
    price: number
}

const TariffCard: FC<TariffCardProps> = ({ title, image, price }) => {
    const [count, setCount] = useState<number>(1)
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.main}>
                <div className={styles.buttons}>
                    <button
                        className={classNames(styles.month, {[styles.active]: count === 1})}
                        onClick={() => setCount(1)} >
                            1 месяц
                    </button>
                    <button
                        className={classNames(styles.month, {[styles.active]: count === 3})}
                        onClick={() => setCount(3)} >
                            3 месяца
                    </button>
                    <button
                        className={classNames(styles.month, {[styles.active]: count === 6})}
                        onClick={() => setCount(6)} >
                            6 месяцев
                    </button>
                </div>
                <img className={styles.image} src={image} alt={title} />
                <div className={styles.total}>
                    <p className={styles.price}>{price * count} TMT</p>
                    <span className={styles.time}>
                        {count === 1 && '/ месяц'}
                        {count === 3 && '/ 3 месяца'}
                        {count === 6 && '/ 6 месяцев'}
                    </span>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.activate}>Активировать</button>
                    <button className={styles.detailed}>Подробнее</button>
                </div>
            </div>
        </div>
    )
}

export default TariffCard