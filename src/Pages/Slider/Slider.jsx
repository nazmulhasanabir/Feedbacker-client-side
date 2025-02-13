import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { animate } from "https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm";
import { Swiper, SwiperSlide } from "swiper/react";
  
   import img2 from '../../assets/picture/feedback-concept-template_23-2148963814.jpg'
   import img3 from '../../assets/picture/premium_photo-1682310144714-cb77b1e6d64a.avif'
   import img4 from '../../assets/picture/smileys-5617876_640.jpg'  
   import img5 from '../../assets/picture/collage-customer-experience-concept_23-2149367139.jpg'
  
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect } from "react";

const   Slider = () => {
   useEffect(() => {
    animate(".box", { opacity: 1, rotate: 360 }, { duration: 1 });
        }, []);
    return (
        <div className=" w-8/12 mx-auto ">
             <Swiper
        // slidesPerView={3}
        // spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        // className="mySwiper"
        spaceBetween={200}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        cl

      >
       
        <SwiperSlide><img className="h-40 lg:h-[550px] w-full rounded-lg" src={img2} /></SwiperSlide>
        <SwiperSlide><img className="h-40 lg:h-[550px] w-full rounded-lg" src={img3} /></SwiperSlide>
        <SwiperSlide><img className="h-40 lg:h-[550px] w-full rounded-lg" src={img4} /></SwiperSlide>
        <SwiperSlide><img className="h-40 lg:h-[550px] w-full rounded-lg" src={img5} /></SwiperSlide>      
      </Swiper>
      
        </div>
    );
};

export default Slider;