import { Link } from 'react-router-dom'
import Heading from '../../../components/simple/heading';
import Button from '../../../components/ui/Button';
import Subheading from '../../../components/ui/Subheading';
import ParallaxContainer from '../../../containers/parallax'
import styles from './styles/FirstSection.module.scss';

interface FirstSectionProps {
    platform: string
    subtitle: string
    buttons: {
        first: {
            link: string
        },
        second: {
            link: string
            text: string
        },
        third: {
            link: string
            text: string
        }
    },
    svg: JSX.Element
}

const FirstSection = ({ platform, subtitle, buttons, svg }: FirstSectionProps) => {
    return (
        <ParallaxContainer leftItem={styles.leftItem} rightItem={styles.rightItem} >
            <div className={styles.content}>
                <div className={styles.icon}>
                    {svg}
                </div>
                <Subheading text={`LAUNCHER FOR ${platform}`} />
                <Heading
                    text={{
                        title: 'Unite Gaming Launcher',
                        subtitle: subtitle
                    }} />
                <div className={styles.wraper}>
                    <Link to={buttons.first.link}>
                        <Button classes={styles.button} title='Регистрация на ключ' />
                    </Link>
                    <Link to={buttons.second.link}>
                        <Button classes={styles.button} title={buttons.second.text} />
                    </Link>
                    <Link to={buttons.third.link}>
                        <Button classes={styles.button} title={buttons.third.text} />
                    </Link>
                </div>
            </div>
        </ParallaxContainer>
    )
}

export default FirstSection