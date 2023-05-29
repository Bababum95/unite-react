import styles from './styles/VerticalBlock.module.scss'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

interface VerticalBlockProps {
    style: string
    children: JSX.Element[] | JSX.Element
    text: {
        title: string
        link: string
    }
    path: string
}

const VerticalBlock = ({ text, style, children, path }: VerticalBlockProps) => {
    const cardClases = classNames(style, styles.card)
    return (
        <div className={cardClases}>
            <Link to={path}>
                {children}
                <h3 className={styles.title}>{text.title}</h3>
                <p className={styles.link}>{text.link}</p>
            </Link>
        </div>
    )
}
export default VerticalBlock