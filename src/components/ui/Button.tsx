import styles from './styles/Button.module.scss'
import classNames from 'classnames'
import Android from '../svg/Android'

interface ButtonProps {
    classes?: string
    loading?: boolean
    title: string
    handleClick?: Function
    children?: JSX.Element
}

const Button = ({title, classes, handleClick, loading, children }: ButtonProps) => {
    const buttonClases = classNames(classes, styles.button, {[styles.load]: loading})
    return (
        <button
            onClick={() => handleClick && handleClick()}
            disabled={loading}
            className={buttonClases}>
                {children && children}
                {title}
        </button>
    )
}

export default Button