import React from "react";
import Cocoa from '../assets/cocoa.png';
import vJamaica from '../assets/vJamaica.png';
import pumamixtape from '../assets/pumamxtp.png';
import lagear from '../assets/lagear.png';
import pumahoops from '../assets/pumahoops.png';
import prostate from '../assets/prostate.png';
import pumahoopscoast2 from '../assets/pumahoopscoast2.png';
import houseguest from '../assets/houseguest.png';


const Projects = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img src={Cocoa} alt='/' />
            <img src={vJamaica} alt='/' />
            <img src={pumamixtape} alt='/' />
            <img src={lagear} alt='/' />
            <img src={pumahoops} alt='/' />
            <img src={prostate} alt='/' />
            <img src={pumahoopscoast2} alt='/' />
            <img src={houseguest} alt='/' />
      </div>
    </div>
  );
};

export default Projects;
