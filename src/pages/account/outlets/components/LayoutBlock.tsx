import { MouseEvent } from 'react';
import { Link } from 'react-router-dom'
import styles from './styles/LayoutBlock.module.scss';

interface LayoutBlockProps {
    title: string
    link?: {
      path: string
      text: string
    }
    button?: {
      handleClick: () => void;
    }
    children: JSX.Element | JSX.Element[]
}
const LayoutBlock = ({title, children, link, button}: LayoutBlockProps) => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h3 className={styles.title}>{title}</h3>
            {link && (<Link className={styles.link} to={link.path}>{link.text}</Link>)}
            {button && (
              <button
                className={styles.button}
                onClick={button.handleClick} >
                Обновить
              </button>
            )}
        </div>
        {children}
    </div>
  )
}

export default LayoutBlock