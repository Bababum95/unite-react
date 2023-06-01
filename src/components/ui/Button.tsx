import styles from './styles/Button.module.scss'
import classNames from 'classnames'

interface ButtonProps {
    classes?: string
    loading?: boolean
    title: string
    handleClick?: Function
}

const Button = ({title, classes, handleClick, loading }: ButtonProps) => {
    const buttonClases = classNames(classes, styles.button, {[styles.load]: loading})
    return (
        <button
            onClick={() => handleClick && handleClick()}
            disabled={loading}
            className={buttonClases}>
                {title}
        </button>
    )
}

export default Button