import React from "react";

const OurStudents = () => {
  return (
    <section className="h-auto w-full flex flex-wrap flex-col gap-5 items-center text-center p-10">
      <div className="flex flex-wrap flex-col items-center">
        <p className="text-indigo-800 text-3xl md:text-4xl text-center font-bold">
          "Pure Hardwork, No Shortcuts!"
        </p>
        <div className="border-b-4 mt-2 rounded-2xl border-yellow-400 w-36 h-1 md:mt-4"></div>
      </div>
      <div className="flex flex-wrap justify-evenly w-full">
        <div className="flex flex-col items-center">
          <img src="./courseImage.webp" alt="" className="h-[140px]" />
          <p className="text-white text-2xl font-bold">600+</p>
          <p className="text-gray-400 text-2xl font-bold">Different Courses</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="./courseImage.webp" alt="" className="h-[140px]" />
          <p className="text-white text-2xl font-bold">7000+</p>
          <p className="text-gray-400 text-2xl font-bold">Students Enrolled</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="./courseImage.webp" alt="" className="h-[140px]" />
          <p className="text-white text-2xl font-bold">10000+</p>
          <p className="text-gray-400 text-2xl font-bold">
            Successful Transition
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStudents;
