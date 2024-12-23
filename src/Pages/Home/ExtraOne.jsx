import React from 'react';
import { motion } from "framer-motion";
import img1 from "../../assets/pinterest/pexels-photo-3184418.jpeg"
const ExtraOne = () => {
    return (
    <div className='flex'>
        <motion.div className='w-3/12  box mx-auto bg-lime-900 my-10 rounded-3xl'
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}
        >
            <div className=' p-12 text-white flex flex-col gap-5'>
                <h2>Empower millions to choose wisely</h2>
                    <img src={img1} alt="" />
                <p>Help others on FEEDBACKER by sharing your genuine experience.</p>
                <button className='btn btn-wide rounded-3xl'>Login/Register</button>
            </div>
        </motion.div>
        <motion.div className='w-3/12  box mx-auto bg-lime-900 my-10 rounded-3xl'
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}
        >
            <div className=' p-12 text-white flex flex-col gap-5'>
                <h2>Empower millions to choose wisely</h2>
                    <img src={img1} alt="" />
                <p>Help others on FEEDBACKER by sharing your genuine experience.</p>
                <button className='btn btn-wide rounded-3xl'>Login/Register</button>
            </div>
        </motion.div>
        <motion.div className='w-3/12  box mx-auto bg-lime-900 my-10 rounded-3xl'
        whileHover={{ scale: [null, 1.5, 1.4] }}
        transition={{ duration: 0.3 }}
        >
            <div className=' p-12 text-white flex flex-col gap-5'>
                <h2>Empower millions to choose wisely</h2>
                    <img src={img1} alt="" />
                <p>Help others on FEEDBACKER by sharing your genuine experience.</p>
                <button className='btn btn-wide rounded-3xl'>Login/Register</button>
            </div>
        </motion.div>
    
    
    </div>
    );
};

export default ExtraOne;