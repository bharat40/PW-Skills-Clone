import React from "react";

const OurProducts = () => {
  return (
    <section className="flex flex-wrap flex-col items-center w-full text-center p-10 mb-10">
      <div>
        <p className="text-3xl md:text-4xl text-indigo-800 font-bold">
          Our Products
        </p>
        <div className="h-1 border-b-4 rounded-2xl mt-2 mb-2 border-yellow-400 md:mt-4 md:mb-4"></div>
      </div>
      <div className="flex flex-wrap w-full justify-evenly">
        <div className="p-2 border-2 rounded-3xl border-white flex flex-col items-center w-64">
          <img src="./labImage.webp" alt="" className="h-[140px]" />
          <p className="text-white text-2 text-2xl font-bold">PW Skills Lab</p>
          <p className="text-gray-400 text-center font-bold">
            Supercharge your project development with out robust lab.
          </p>
        </div>
        <div className="p-2 border-white flex flex-col items-center w-64">
          <img src="./labImage.webp" alt="" className="h-[140px]" />
          <p className="text-white text-2 text-2xl font-bold">Job Portal</p>
          <p className="text-gray-400 text-center font-bold">
            Supercharge your project development with out robust lab.
          </p>
        </div>
        <div className="p-2 border-white flex flex-col items-center w-64">
          <img src="./labImage.webp" alt="" className="h-[140px]" />
          <p className="text-white text-2 text-2xl font-bold">
            Experience Portal
          </p>
          <p className="text-gray-400 text-center font-bold">
            PW Skill's self-paced experience portal prioritises hands-on
            training with 570+ internship projects.
          </p>
        </div>
        <div className="p-2 border-white flex flex-col items-center w-64">
          <img src="./labImage.webp" alt="" className="h-[140px]" />
          <p className="text-white text-2 text-2xl font-bold">Affiliate</p>
          <p className="text-gray-400 text-center font-bold">
            Explore affiliate marketing opportunities with PW Skills and attain
            financial freedom.
          </p>
        </div>
        <div className="p-2 border-white flex flex-col items-center w-64 border-2 rounded-2xl">
          <img src="./labImage.webp" alt="" className="h-[140px]" />
          <p className="text-white text-2 text-2xl font-bold">Hall of Fame</p>
          <p className="text-gray-400 text-center font-bold">
            Our student placements and 100k+ career transitions speak volumes
            about our courses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
