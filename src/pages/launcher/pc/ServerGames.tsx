import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import styles from './styles/ServerGames.module.scss';
import Heading from '../../../components/simple/heading'
import SliderItem from './SliderItem';


const ServerGames = () => {
    return (
        <section className={styles.section}>
            <Heading
                text={{
                    title: 'Серверные игры',
                    subtitle: 'Общайтесь, болтайте и разговаривайте с друзьями!'
                }}
                classes={{
                    subtitle: styles.subtitle
                }} />
            <Swiper
                modules={[Navigation]}
                navigation 
                breakpoints={{
                    320: { slidesPerView: 1.8, spaceBetween: 20 },
                    400: { slidesPerView: 2, spaceBetween: 20 },
                    540: { slidesPerView: 2.5, spaceBetween: 25 },
                    700: { slidesPerView: 3, spaceBetween: 25 },
                    900: { slidesPerView: 3.2, spaceBetween: 30 },
                    1050: { slidesPerView: 3.5, spaceBetween: 35 },
                    1200: { slidesPerView: 4, spaceBetween: 40 }
                }} >
                <SwiperSlide>
                    <SliderItem />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default ServerGames
