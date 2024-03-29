import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";



const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-12 w-[75%] mx-auto">
            <SectionTitle subHeading={"what our client says"} heading={"testimonials"}>
            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center mx-24 mb-16">
                            <span className="pb-2 pt-2">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            </span>
                           <span className=" text-6xl">
                           <FaQuoteLeft/>
                           </span>
                            
                            
                            <p className="py-4">{review.details}</p>
                            <h3 className="text-3xl text-orange-400 ">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;