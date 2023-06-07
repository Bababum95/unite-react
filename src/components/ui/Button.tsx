import classNames from 'classnames'
import styles from './styles/Button.module.scss'

interface ButtonProps {
    title: string
    type?: 'button' | 'submit' | 'reset'
    classes?: string
    loading?: boolean
    handleClick?: Function
    children?: JSX.Element
    fullPage?: boolean
}

const Button = ({title, classes, handleClick, loading, children, fullPage, type }: ButtonProps) => {
    const buttonClases = classNames(classes, styles.button, {[styles.load]: loading, [styles.fullPage]: fullPage})
    return (
        <button
            type={type}
            onClick={() => handleClick && handleClick()}
            disabled={loading}
            className={buttonClases}>
                {children && children}
                {title}
        </button>
    )
}

export default Button