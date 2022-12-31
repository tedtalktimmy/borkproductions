import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#ffd906] font-bold p-2">WHO ARE WE.</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl md:py-6 font-bold">
          A full-service video agency based in <p className="text-[#ffd906]">Chattanooga, TN.</p>
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl tex-xl font-bold">
            We do it all.
          </p>
          <Typed
            className="md:text-3xl sm:text-2xl tex-xl font-bold text-[#878787]"
            strings={[
              "television commercials",
              "online advertisements",
              "webisodes",
              "infomercials",
              "films",
            ]}
            typeSpeed={180}
            backSpeed={200}
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
