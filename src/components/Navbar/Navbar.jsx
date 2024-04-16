import React, { useState } from "react";
import data from "../../data.json";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="max-w-full">
      <header>
        <nav className="flex justify-between px-8 py-6 sm:p-6 items-center w-full">
          <a href="/">
            <div className="flex items-center gap-3 pr-4">
              <img
                height={32}
                width={32}
                src={data.sections.header.logo}
                alt={data.sections.header.alt}
              />
              <p className="text-primary font-normal text-[24px] mb-1 lg:text-[28px]">
                {data.sections.header.text_logo}
              </p>
            </div>
          </a>
          <ul className="items-center justify-around hidden sm:flex md:gap-2 lg:gap-8 xl:gap-12">
            {data.sections.header.navbar.map((item, index) => (
              <a
                href="#"
                key={index}
                className="min-w-max-content whitespace-nowrap ml-6"
              >
                <li
                  className={`font-bold text-${
                    item === "About Us" ? "primary" : "gray_default"
                  } text-[14px] md:text-[16px] lg:text-[18px]`}
                >
                  {item}
                </li>
              </a>
            ))}
          </ul>
          <div className="items-center text-lg hidden sm:flex gap-6 min-w-max-content px-4">
            <a
              href="#"
              className="font-bold text-gray_default text-[14px] md:text-[16px] lg:text-[18px]"
            >
              {data.sections.header.userLogin}
            </a>
            <a
              href="#"
              className="font-semibold text-white bg-primary py-2 px-6 md:py-3 md:px-9 cursor-pointer whitespace-nowrap"
            >
              <p className="font-bold text-[14px] md:text-[16px] lg:text-[18px]">
                {data.sections.header.userSignUp}
              </p>
            </a>
          </div>
          <div className="sm:hidden">
            {isMenuOpen ? (
              <div className="relative">
                <HiX
                  onClick={handleMenuOpen}
                  className="text-primary w-8 h-8"
                />
                <div className="absolute z-40 right-0 bg-black bg-opacity-10 px-6 rounded-md">
                  <ul className="">
                    {data.sections.header.navbar.map((item, index) => (
                      <a
                        href="#"
                        key={index}
                        className="min-w-max-content whitespace-nowrap"
                      >
                        <li
                          className={`font-bold text-gray_default text-[14px] my-4 hover:text-primary active:text-gray_dark`}
                        >
                          {item}
                        </li>
                      </a>
                    ))}
                    <li className="font-bold text-gray_default text-[14px] my-4 hover:text-primary active:text-gray_dark">
                      {data.sections.header.userLogin}
                    </li>
                    <li className="font-bold text-gray_default text-[14px] my-4 hover:text-primary active:text-gray_dark">
                      <div>{data.sections.header.userSignUp}</div>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <HiMenu
                onClick={handleMenuOpen}
                className="text-primary w-8 h-8"
              />
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;
