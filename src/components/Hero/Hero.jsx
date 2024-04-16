import React from "react";
import data from "../../data.json";

function Hero() {
  const words = data.sections.one.title.split(" ");

  return (
    <div className="relative">
      <div className="grid sm:grid-cols-2 gap-2">
        <div className="flex flex-col justify-center items-start text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
          <h2 style={{ lineHeight: "1.5" }}>
            {words.map((word, index) => (
              <span
                key={index}
                style={{
                  color: word === "expertise" ? "#2B88D9" : "inherit",
                }}
              >
                {word}{" "}
              </span>
            ))}
          </h2>
          <h2 className="text-[#F2F2F2] sm:mb-60">\\ Emergency</h2>
        </div>
        <div>
          <img src={data.sections.one.image} alt={data.sections.one.alt} />
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 bg-white bg-opacity-90 w-full h-[30%] z-10"
        style={{
          boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="py-5 px-12 grid">
          <p className="text-2xl font-[500] tracking-normal">
            {data.sections.two.title}
          </p>
          <div className="flex border-s-[#DDDDDD]">
            {Object.entries(data.sections.two.filtersbar).map(
              ([filterTitle, options]) => (
                <select
                  key={filterTitle}
                  className="border border-gray_light text-gray_default px-6 py-3.5 w-[18%] cursor-pointer"
                  style={{ appearance: "auto" }}
                >
                  {options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )
            )}
            <button className="bg-primary ml-4 w-1/5 text-white">
              {data.sections.two.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
