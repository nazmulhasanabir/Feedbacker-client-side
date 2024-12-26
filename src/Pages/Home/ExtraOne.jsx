import React from 'react';
import { motion } from "framer-motion";
import img1 from "../../assets/pinterest/1.jpg"
import img2 from "../../assets/pinterest/2.jpg"
import img3 from "../../assets/pinterest/123.jpg"
const ExtraOne = () => {
    return (
    <div className='flex flex-col  lg:flex-row'>
        <motion.div className=' w-11/12 lg:w-3/12  box mx-auto bg-lime-900 my-10 rounded-3xl'
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}
        >
            <div className=' p-12 text-white flex flex-col gap-5'>
                <h2 className='text-xl font-bold'>Share Your Experience</h2>
                    <img src={img1} alt="" />
                <p>Your voice matters! Share your genuine experience and help others make informed choices.</p>
                <button className='btn btn-wide rounded-3xl'>Login/Register</button>
            </div>
        </motion.div>
        <motion.div className=' w-11/12 lg:w-3/12   box mx-auto  bg-lime-800  my-10 rounded-3xl'
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}
        >
            <div className=' p-12 text-white flex flex-col gap-5'>
                <h2 className='text-xl font-bold'> Explore Genuine Reviews</h2>
                    <img src={img2} alt="" />
                <p>Find trustworthy feedback from real users to make confident decisions.</p>
                <button className='btn btn-wide rounded-3xl'>Explore</button>
            </div>
        </motion.div>
        <motion.div className=' w-11/12 lg:w-3/12  box mx-auto bg-lime-900 my-10 rounded-3xl'
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}
        >
            <div className=' p-12 text-white flex flex-col gap-5'>
                <h2 className='text-xl font-bold'>Connect with Community</h2>
                    <img src={img3} alt="" />
                <p>Join a network of users who value transparency and trust. Together, we make better choices.</p>
                <button  className='btn btn-wide rounded-3xl cursor-pointer'>Connect</button>
            </div>
        </motion.div>
    
    
    </div>
    );
};

export default ExtraOne;