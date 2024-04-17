import React from "react";
import data from "../../data.json";

function OneSection() {
  const words = data.sections.three.title.split(" ");
  return (
    <div className="mt-0 sm:mt-14">
      <div className="flex flex-col-reverse mx-auto items-center gap-4 sm:gap-8 sm:flex-row">
        <img
          src={data.sections.three.image1}
          alt={data.sections.three.alt1}
          width="35%"
          height="auto"
          className="hidden sm:block mt-3 px-4 sm:px-0 mx-auto"
        />
        <div className="flex flex-col gap-2 mt-6 sm:mt-0">
          <div className="text-3xl md:text-4xl lg:text-6xl font-bold px-4 sm:px-0">
            <h2 style={{ lineHeight: "1.2" }}>
              {words.map((word, index) => (
                <span
                  key={index}
                  style={{
                    color: word === "Surgery" ? "#2B88D9" : "inherit",
                  }}
                >
                  {word}{" "}
                </span>
              ))}
            </h2>
          </div>
          <p className="text-[#6A6A6A] text-xl sm:mb-4 px-4 sm:px-0">
            {data.sections.three.subtitle}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={data.sections.three.image2}
              alt={data.sections.three.alt2}
              className="sm:w-full px-4 sm:px-0 object-cover object-center mx-auto col-span-2 sm:col-span-1"
            />
            <img
              src={data.sections.three.image3}
              alt={data.sections.three.alt3}
              className="sm:w-full px-4 sm:px-0 object-cover object-center mx-auto col-span-2 sm:col-span-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default OneSection;
