import styles from './styles/Community.module.scss';
import HorizontalBlock from '../../../containers/block/HorizontalBlock'

const Community = () => {
    return (
        <HorizontalBlock textRight={true} style={styles.card} textMaxWidth={490}
            path='/community'
            text={{
                title: 'Сообщества по играм',
                paragraph: 'Найди единомышленников по своим любимым играм в наших сообществах!',
                link: 'Просмотреть сообщества >'
            }} >
            <div className={styles.image} />
        </HorizontalBlock>
    )
}

export default Community