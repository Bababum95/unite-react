import { FC } from "react"
import { ITariffPopup } from "../../../../../core/interfaces/tariffPopup.interfaces"
import Popup from "../../components/Popup"
import styles from './styles/TariffPopup.module.scss';
import Button from "../../../../../components/ui/Button";

interface TariffPopupProps {
    handleClose: () => void
    data: null | ITariffPopup
}

const TariffPopup: FC<TariffPopupProps> = ({ handleClose, data }) => {
    return (
        <Popup isOpen={!!data} handleClose={handleClose}>
            <>
                {data && (
                    <div className={styles.container}>
                        <button className={styles.close} onClick={handleClose} />
                        <h2 className={styles.title}>{data.title}</h2>
                        <p className={styles.text}>{data.text}</p>
                        <Button classes={styles.ok} handleClick={handleClose} title='OK' />
                    </div>
                )}
            </>
        </Popup>
    )
}

export default TariffPopup