import React from "react";
import img1 from "../../assets/pinterest/pexels-photo-3184418.jpeg"
import img2 from "../../assets/pinterest/one.jpg"
import img3 from "../../assets/pinterest/two.jpg"
import img4 from "../../assets/pinterest/three.jpg"
import img5 from "../../assets/pinterest/four.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const ExtraTwo = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 bg-orange-500 ">
    <div className=" w-6/12 p-12">
      <h2 className="text-3xl  text-white  font-bold mb-4 ">
        We craft engaging experiences through innovative storytelling and
        design.
      </h2>
      <p className=" text-white mb-6">
        Whether you're sharing your thoughts or exploring others' feedback,
        our platform ensures a seamless and dynamic review process. Empower
        your opinions and connect with others effortlessly, making every
        review count.
      </p>
      <button className="btn btn-primary btn-md">About Us</button>
    </div>
    <div className="w-full lg:w-6/12 ">
      <Swiper
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 1 },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={img1} className="h-96 w-full  object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} className="h-96 w-full  object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} className="h-96 w-full  object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} className="h-96 w-full  object-cover rounded-lg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} className="h-96  w-full object-cover rounded-lg" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
  
  );
};

export default ExtraTwo;
