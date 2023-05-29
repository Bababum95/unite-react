import styles from './styles/Title.module.scss'
import classNames from 'classnames'

const Title = (props:{style?: string, text: string}) => {
    const titleClases = classNames(props.style, styles.title)
    return (
        <h2 className={titleClases}>{props.text}</h2>
    )
}

export default Title