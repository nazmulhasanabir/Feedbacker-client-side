import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
   import img1 from '../../assets/pinterest/one.jpg'
   import img2 from '../../assets/pinterest/two.jpg'
   import img3 from '../../assets/pinterest/three.jpg'
   import img4 from '../../assets/pinterest/four.jpg'
   import img5 from '../../assets/pinterest/five.jpg'
   import img6 from '../../assets/pinterest/six.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const   Slider = () => {
    return (
        <div className="bg-green-600">
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
        slidesPerView={3}
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
        <SwiperSlide><img src={img1} /></SwiperSlide>
        <SwiperSlide><img src={img2} /></SwiperSlide>
        <SwiperSlide><img src={img3} /></SwiperSlide>
        <SwiperSlide><img src={img4} /></SwiperSlide>
        <SwiperSlide><img src={img5} /></SwiperSlide>
        <SwiperSlide><img src={img6} /></SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Slider;