import classNames from 'classnames'
import styles from './Sceletone.module.scss'

const SceletoneString = (props: {style: string}) => {
    const stringClases = classNames(props.style, styles.string)

  return (
    <div className={stringClases} />
  )
}

export default SceletoneString