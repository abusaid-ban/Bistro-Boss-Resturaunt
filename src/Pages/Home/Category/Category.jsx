import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <section>
            <SectionTitle
            subHeading={"From 11:00 am to 10:00 pm"}
            heading={"Order Online"}>

            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h2 className="text-3xl text-center -mt-12 upper
                 text-white">Salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h2 className="text-3xl text-center -mt-12 upper
                 text-white">pizza</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h2 className="text-3xl text-center -mt-12 upper
                 text-white">Soup</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h2 className="text-3xl text-center -mt-12 upper
                 text-white">Dessert</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h2 className="text-3xl text-center -mt-12 upper
                 text-white">Vegetable</h2>
                </SwiperSlide>

            </Swiper>
        </section>

    )
};

export default Category;