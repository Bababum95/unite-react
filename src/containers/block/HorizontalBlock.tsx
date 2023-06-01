import styles from './styles/HorizontalBlock.module.scss'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import TextArea from './TextArea'

interface HorizontalBlockProps {
    style?: string
    children?: JSX.Element[] | JSX.Element
    text: {
        title: string
        paragraph: string
        link?: string
    }
    path?: string
    textRight: boolean
    textMaxWidth?: number
}

const HorizontalBlock = ({ text, style, children, path, textRight, textMaxWidth }: HorizontalBlockProps) => {
    const cardClases = classNames(style, styles.card)
    return (
        <div className={cardClases}>
            {path ? (
                <Link to={path}>
                    <TextArea text={text} textRight={textRight} textMaxWidth={textMaxWidth} styleLink={styles.link} />
                    {children}
                </Link>) : (
                <>
                    <TextArea text={text} textRight={textRight} textMaxWidth={textMaxWidth} />
                    {children}
                </>
            )}
        </div>
    )
}
export default HorizontalBlock