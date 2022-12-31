import React from "react";
import OurHouse from "../assets/ourhouse.jpg";

const AboutUs = () => {
  return (
    <div className="w-full bg-black py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
        className='w-[500px] mx-auto my-4'
        src={OurHouse} alt="/"
        />
        <div className='flex flex-col justify-center'>
          <p className="text-white font-bold py-2">OUR HOUSE.</p>
          <p className='text-white md:text-4xl sm:text-3xl font-bold py-2'>
            <span className='text-[#ffd906] font bold'>Bork House</span> is a team of <span className='text-[#878787]'>artists, leaders,</span> and <span className='text-[#878787]'>content creators</span> who
            want to tell stories.
            <p className='text-white md:text-4xl sm:text-3xl font-bold py-2'> If you can dream it, we can make it happen. We
            use stories to <span className='text-[#878787]'>make your business come alive.</span> It is all about
            finding the right way in <span className='text-[#878787]'>so you get the most out of your investment.</span>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
