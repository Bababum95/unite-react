import styles from './Heading.module.scss'
import classNames from 'classnames'
import Title from '../../ui/Title'

interface HeadingProps {
    classes?: {
        title?: string
        subtitle?: string
    }
    text: {
        title: string
        subtitle: string
    }
}

const Heading = ({ text, classes }: HeadingProps) => {
    const subTitleClases = classNames(classes && classes.subtitle, styles.subtitle)
    return (
        <>
            <Title style={classes && classes.title} text={text.title} />
            <p className={subTitleClases}>{text.subtitle}</p>
        </>
    )
}

export default Heading