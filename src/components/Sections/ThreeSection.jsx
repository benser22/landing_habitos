import React from "react";
import data from "../../data.json";

function ThreeSection() {
  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 text-center gap-4 my-12">
      <div className="flex sm:flex-col flex-col-reverse items-center justify-between">
        <div className="relative">
          <img
            src={data["section-five"].image1}
            alt={data["section-five"].alt1}
            className="w-full h-full object-cover pr-8"
          />
          <div className="absolute bottom-0 left-0 bg-opacity-10 bg-[#D3E8FBB2] sm:w-[102%] z-20">
            <p className="text-black bg-opacity-0 py-4 md:py-8 px-12 md:px-24 font-semibold text-end">
              {data["section-five"].subtitle1}
            </p>
          </div>
        </div>
        <div className="text-gray_dark text-2_5_xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-left">
          <p>{data["section-five"].title1}</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between">
        <div className="text-gray_dark text-2_5_xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 sm:mt-0 sm:mb-8 text-right">
          <p>{data["section-five"].title2}</p>
        </div>
        <div className="absolute bottom-0 right-0 bg-opacity-10 bg-[#D3E8FBB2] sm:w-[50%] z-10">
          <p className="text-black bg-opacity-0 py-4 md:py-8 px-12 md:px-24 font-semibold text-end">
            {data["section-five"].subtitle2}
          </p>
        </div>
        <img
          src={data["section-five"].image2}
          alt={data["section-five"].alt2}
          width="100%"
          height="auto"
          className="object-cover pl-8"
        />
      </div>
    </div>
  );
}
export default ThreeSection;
