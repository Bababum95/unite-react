import classNames from 'classnames'
import styles from './GridContainer.module.scss';

interface GridContainerProps {
    style?: string
    children: JSX.Element | JSX.Element[]
  }

const GridContainer = ({style, children}: GridContainerProps) => {
    const containerClases = classNames(style, styles.grid)
  return (
    <ul className={containerClases}>{children}</ul>
  )
}

export default GridContainer