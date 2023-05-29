import styles from './styles/Button.module.scss'
import classNames from 'classnames'

interface ButtonProps {
    classes?: string
    title: string
  }

const Button = ({title, classes}: ButtonProps) => {
    const buttonClases = classNames(classes, styles.button)
    return (
        <button className={buttonClases}>{title}</button>
    )
}

export default Button