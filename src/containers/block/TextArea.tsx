import classNames from 'classnames'
import styles from './styles/TextArea.module.scss'

interface TextAreaProps {
    text: {
        title: string
        paragraph: string
        link?: string
    }
    textRight: boolean
    textMaxWidth?: number
    styleLink?: string
}

const TextArea = ({ text, textRight, textMaxWidth, styleLink }: TextAreaProps) => {
    const containerClases = classNames(styles.container, {[styles.containerRight]: textRight})
    return (
        <div className={containerClases} style={{ maxWidth: textMaxWidth }} >
            <h3 className={styles.title}>{text.title}</h3>
            <p className={styles.paragraph}>{text.paragraph}</p>
            {text.link && (<p className={styleLink}>{text.link}</p>)}
        </div>
    )
}
export default TextArea