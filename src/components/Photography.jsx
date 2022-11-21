import {React, useRef, useEffect, useState} from 'react';
import Bday166 from '../assets/bday166.jpg';
import Bday169 from '../assets/bday169.jpg';
import Bday148 from '../assets/bday148.jpg';
import Bday134 from '../assets/bday134.jpg';
import Jade3 from '../assets/jade3.jpg';
import Bday12 from '../assets/bday12.jpg';
import Grad1 from '../assets/grad1.jpg';
import Grad2 from '../assets/grad2.jpg';
import Grad3 from '../assets/grad3.jpg';
import Grad4 from '../assets/grad4.jpg';
import Grad5 from '../assets/grad5.jpg';
import Hoop from '../assets/hoop.jpg';
import Soccer from '../assets/soccer.jpg';
import Autumn from '../assets/autumn.jpg';
import Fashion from '../assets/fashion.jpg';
import Smile from '../assets/smile.jpg';
import Smoke from '../assets/smoke.jpg';
import Cars from '../assets/cars.jpg';
import Faceshot from '../assets/faceshot.jpg';
import Faceshot2 from '../assets/faceshot2.jpg';
import Jean from '../assets/jean.jpg';
import Portrait from '../assets/portrait.jpg';
import Portrait2 from '../assets/portrait2.jpg';
import Gradshot from '../assets/gradshot.jpg';
import Gradshot2 from '../assets/gradshot2.jpg';
import Gradshot3 from '../assets/gradshot3.jpg';
import { motion } from 'framer-motion';

const Photography = () => {
  return (
    <div className="w-full bg-[#ffd906] py-16 px-4">
      <div>
     <motion.div className='carousel'>
      <motion.div className='inner-carousel'>

      </motion.div>
     </motion.div>
        <img src={Bday166} alt='/' />
        <img src={Bday169} alt='/' />
        <img src={Bday148} alt='/' />
        <img src={Bday134} alt='/' />
        <img src={Jade3} alt='/' />
        <img src={Bday12} alt='/' />
        <img src={Grad1} alt='/' />
        <img src={Grad2} alt='/' />
        <img src={Grad3} alt='/' />
        <img src={Grad4} alt='/' />
        <img src={Grad5} alt='/' />
        <img src={Hoop} alt='/' />
        <img src={Soccer} alt='/' />
        <img src={Autumn} alt='/' />
        <img src={Fashion} alt='/' />
        <img src={Smile} alt='/' />
        <img src={Smoke} alt='/' />
        <img src={Cars} alt='/' />
        <img src={Faceshot} alt='/' />
        <img src={Faceshot2} alt='/' />
        <img src={Jean} alt='/' />
        <img src={Portrait} alt='/' />
        <img src={Portrait2} alt='/' />
        <img src={Gradshot} alt='/' />
        <img src={Gradshot2} alt='/' />
        <img src={Gradshot3} alt='/' />
      </div>
    </div>
  )
}

export default Photography;