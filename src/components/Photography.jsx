import {React, useRef, useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import images from '../images';


const Photography = () => {
  return (
    <div className="w-full py-16 px-4">

     <motion.div className='carousel'>
      <motion.div drag="x" className='inner-carousel'>
        {images.map((image) => {
         return (
          <motion.div className="item">
            <img src={image} alt='/' />
          </motion.div>
         );
        })}

      </motion.div>
     </motion.div>
      </div>
  );
}

export default Photography;