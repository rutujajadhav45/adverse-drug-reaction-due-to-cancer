import React from "react";

const Banner = () => {
  return (
    <div className="w-full flex sm:flex-wrap flex-col-reverse sm:flex-row">
      <div className="flex justify-center items-start sm:w-1/2 p-8 sm:p-4 flex-col">
        <div className="w-14 sm:w-1/5">
          <img src="/assets/medal.png" alt="medal" />
        </div>
        <div className="p-2 ">
          <span className="text-gray-900 text-3xl sm:text-5xl block sm:text-left font-extrabold">
            Transparency
            <br />
            Empathy 
            <br />
             Empowerment
          </span>
          <p className="text-gray-500 py-4">
            The heart of everything we do. We believe that informed patients and
            caregivers can make better decisions and actively participate in
            their treatment journey.
          </p>
          <a
            href="/RESULTS.pdf"
            target="_blank"
            className="bg-blue-700 px-4 py-2 text-white text-lg rounded-lg"
          >
            Explore our work
          </a>
        </div>
      </div>
      <div className="flex justify-end items-center sm:w-1/2">
        <img src="/assets/banner.png" alt="banner" height={500} />
      </div>
    </div>
  );
};

export default Banner;
