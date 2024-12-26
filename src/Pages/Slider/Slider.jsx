import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { animate } from "https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm";
import { Swiper, SwiperSlide } from "swiper/react";
   import img1 from '../../assets/pinterest/1.jpg'
   import img2 from '../../assets/pinterest/12.png'
   import img3 from '../../assets/pinterest/123.jpg'
   import img4 from '../../assets/pinterest/1234.webp'
   import img5 from '../../assets/pinterest/2.jpg'
   import img6 from '../../assets/pinterest/23.jpg'
   import img7 from '../../assets/pinterest/234.webp'

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
        <div className="m-1 lg:m-20">
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
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        cl

      >
       
        <SwiperSlide><img className=" h-40 lg:h-[450px] w-full rounded-xl" src={img2} /></SwiperSlide>
        <SwiperSlide><img className=" h-40 lg:h-[450px] w-full rounded-xl" src={img3} /></SwiperSlide>
        <SwiperSlide><img className=" h-40 lg:h-[450px] w-full rounded-xl" src={img4} /></SwiperSlide>
        <SwiperSlide><img className=" h-40 lg:h-[450px] w-full rounded-xl" src={img5} /></SwiperSlide>
     
        
      </Swiper>
        </div>
    );
};

export default Slider;