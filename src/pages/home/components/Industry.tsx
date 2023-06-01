import styles from './styles/Industry.module.scss';
import Heading from "../../../components/simple/heading"
import ParalaxContainer from '../../../containers/parallax';

const Industry = () => {
    return (
        <ParalaxContainer>
            <div className={styles.container}>
                <Heading
                    text={{
                        title: 'Вместе развиваем игровую индустрию!',
                        subtitle: 'Наша цель – создавать лучшие решения для комфортной игры с друзьями и другими игроками!'
                    }}
                    classes={{
                        title: styles.title,
                        subtitle: styles.subtitle
                    }} />
            </div>
            </ParalaxContainer>
    )
}

export default Industry