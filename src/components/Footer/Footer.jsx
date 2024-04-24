import React from "react";
import data from "../../data.json";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="flex justify-center pt-10 sm:pt-20 pb-6 pr-6 pl-10 sm:px-16 bg-[#F1F8FF] mt-4 overflow-hidden">
      <div className="container mx-auto grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-12 text-black">
        {/* Blog */}
        {/* col-span-5 */}

        {/* Columna 1 */}
        <div className="relative flex flex-col col-span-5 justify-between gap-8 sm:col-span-2 pr-6 mb-10 sm:mb-0">
          <a href="/#">
            <div className="flex items-center flex-col justify-center lg:flex-row gap-3 pr-4">
              <img
                height={32}
                width={32}
                src={data["section-header"].logo}
                alt={data["section-header"].alt}
              />
              <p className="text-primary font-normal text-[20px] mb-1 lg:text-[28px]">
                {data["section-header"].text_logo}
              </p>
            </div>
          </a>
          <p className="text-base">{data["section-footer"].paragraph}</p>
          <div className="flex items-center gap-2 xl:gap-8 2xl:gap-12 sm:mb-24">
            <img
              height={32}
              width={31}
              className="bg-white p-1 cursor-pointer rounded-md"
              src={data["section-footer"].links["facebook-icon"]}
              alt={data["section-footer"].links["social-media-alt"]}
            />
            <img
              height={32}
              width={31}
              className="bg-white p-1 cursor-pointer rounded-md"
              src={data["section-footer"].links["twitter-icon"]}
              alt={data["section-footer"].links["social-media-alt"]}
            />
            <img
              height={32}
              width={31}
              className="bg-white p-1 cursor-pointer rounded-md mr-2"
              src={data["section-footer"].links["linkedin-icon"]}
              alt={data["section-footer"].links["social-media-alt"]}
            />
            <a href={data.bolg.url} Target="_blank" className="ml-auto">
              <div
                title={data.bolg.text}
                className="text-center hover:text-primary cursor-pointer flex items-center gap-1 justify-center w-full"
              >
                <img
                  width={32}
                  height={32}
                  src={data.bolg.icon}
                  alt={`${data.bolg.title} icon`}
                />
                <div className="flex flex-col text-left justify-center">
                  <p className="text-md md:text-lg font-bold">
                    {data.bolg.title}
                  </p>
                  <h6 className="hidden lg:flex text-[12px] -mt-1 text-gray_default">
                    {data.bolg.text}
                  </h6>
                </div>
              </div>
            </a>
          </div>
          <div className="absolute hidden sm:flex items-center gap-1 text-[12px] bottom-0">
            <p className="text-gray_light">
              {data["section-footer"].links.copy}
            </p>
            <p>{data["section-footer"].links["copy-name"]}</p>
          </div>
        </div>
        {/* Columna 2 */}
        <div className="col-span-1">
          <h2 className="text-lg font-bold mb-6">
            {data["section-footer"].links.Company.name}
          </h2>
          <div className="mt-2">
            {data["section-footer"].links.Company.data.map((item, index) => (
              <a key={index}>
                <Link
                  to={item.toLowerCase().replace(/\s+/g, "")}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                >
                  <p className="sm:text-base text-sm cursor-pointer mt-1 sm:mt-3 tracking-normal hover:text-primary">
                    {item}
                  </p>
                </Link>
              </a>
            ))}
          </div>
        </div>
        {/* Columna 3 */}
        <div className="col-span-1">
          <h2 className="text-lg font-bold mb-6">
            {data["section-footer"].links.Support.name}
          </h2>
          <div className="mt-2">
            {data["section-footer"].links.Support.data.map((item, index) => (
              <a key={index}>
                <p className="sm:text-base text-sm cursor-pointer mt-1 sm:mt-3 tracking-normal hover:text-primary">
                  {item}
                </p>
              </a>
            ))}
          </div>
        </div>
        {/* Columna 4 */}
        <div className="col-span-1 relative">
          <h2 className="text-lg font-bold mb-6">
            {data["section-footer"].links.Contact.name}
          </h2>
          <div className="mt-2">
            {data["section-footer"].links.Contact.data.map((item, index) => (
              <a key={index}>
                <p className="sm:text-base text-sm truncate cursor-pointer mt-1 sm:mt-3 tracking-normal hover:text-primary">
                  {item}
                </p>
              </a>
            ))}
          </div>
          <div
            className="absolute hidden sm:flex items-center gap-1 text-[12px] bottom-0 right-[10%]"
            style={{ minWidth: "max-content" }}
          >
            <p className="text-gray_light">
              {data["section-footer"].links.designBy}
            </p>
            <p>{data["section-footer"].links["designBy-mame"]}</p>
          </div>
        </div>
        {/* Fin de las columnas */}
      </div>
    </footer>
  );
}

export default Footer;
