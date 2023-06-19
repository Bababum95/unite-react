import classNames from "classnames";
import styles from './styles/Popup.module.scss';

interface PopupProps {
    children: JSX.Element | JSX.Element[]
    isOpen: boolean
    handleClose: () => void;
}

const Popup = ({isOpen, children, handleClose}: PopupProps) => {
  return (
    <div
        className={classNames(styles.popup, {[styles.open]: isOpen})}
        onClick={handleClose} >
    <div
      onClick={evt => evt.stopPropagation()}
      className={styles.container}>
        {children}
    </div>
</div>
  )
}

export default Popup