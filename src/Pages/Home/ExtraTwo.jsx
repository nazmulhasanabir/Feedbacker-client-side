import React from "react";

import img2 from "../../assets/pinterest/1.jpg"
import img3 from "../../assets/pinterest/12.png"
import img4 from "../../assets/pinterest/123.jpg"
import img5 from "../../assets/pinterest/1234.webp"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Link } from "react-router-dom";

const ExtraTwo = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 bg-orange-500 ">
    <div className=" w-6/12 p-4 lg:p-12">
      <h2 className="text-xl  lg:text-3xl  text-white  font-bold mb-4 ">
        We craft engaging experiences through innovative storytelling and
        design.
      </h2>
      <p className=" text-white mb-6">
        Whether you're sharing your thoughts or exploring others' feedback,
        our platform ensures a seamless and dynamic review process. Empower
        your opinions and connect with others effortlessly, making every
        review count.
      </p>
   <Link to={'/about'}><button className="btn btn-primary btn-md">About Us</button></Link>
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
        {/* <SwiperSlide>
          <img src={img1} className="h-96 w-full  object-cover rounded-lg" />
        </SwiperSlide> */}
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
