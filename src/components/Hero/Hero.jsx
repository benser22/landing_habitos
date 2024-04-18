import React from "react";
import data from "../../data.json";

function Hero() {
  const words = data["section-one"].title.split(" ");

  return (
    <div className="relative">
      <div className="grid sm:grid-cols-2 gap-2 mt-16 sm:mt-20">
        <div className="flex flex-col justify-center items-start text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
          <h2 style={{ lineHeight: "1.2" }}>
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
          <img
            src={data["section-one"].image}
            alt={data["section-one"].alt}
            width="100%"
            height="auto"
            className="block sm:hidden"
          />
        </div>
        <div className="hidden sm:block">
          <img src={data["section-one"].image} alt={data["section-one"].alt} />
        </div>
      </div>
      <div
        className="sm:absolute backdrop-blur-[0.5px] top-0 sm:top-[50%] md:top-[70%] left-0 bg-white bg-opacity-85 w-full h-auto py-4 z-10"
        style={{
          boxShadow: "0px 0px 1px 0px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="py-4 px-12 grid">
          <p className="text-2xl font-[500] mb-3 tracking-normal">
            {data["section-two"].title}
          </p>
          <div className="flex flex-col sm:flex-row border-s-[#DDDDDD]">
            {Object.entries(data["section-two"].filtersbar).map(
              ([filterTitle, options]) => (
                <select
                  key={filterTitle}
                  className={`border border-gray_light text-gray_default px-6 py-3.5 w-full sm:w-[18%] cursor-pointer`}
                >
                  {options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )
            )}
            <button className="bg-primary sm:ml-4 mt-2 sm:mt-0 w-full sm:w-1/5 py-3 text-white">
              {data["section-two"].button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
