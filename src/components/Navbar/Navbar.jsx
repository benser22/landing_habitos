import { useState } from 'react';
import data from '../../data.json';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-scroll';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleContactClick = () => {
    const mailtoLink = `mailto:call@nexusfood.com?subject=Contact`;
    window.location.href = mailtoLink;
  };

  return (
    <div
      className="max-w-full fixed top-0 w-full h-min-content"
      style={{ backgroundColor: 'white', zIndex: 99999 }}
    >
      <header>
        <nav className="flex justify-between px-8 py-2 sm:p-3 items-center w-full">
          <a href="/">
            <div className="flex items-center gap-3 pr-4 sm:hidden md:flex">
              <img
                height={32}
                width={32}
                src={data['section-header'].logo}
                alt={data['section-header'].alt}
                className="sm:ml-4 xl:ml-0 break1:hidden break2:flex"
              />
              <p className="sm:hidden xl:flex text-primary font-normal text-[24px] mb-1 lg:text-[28px]">
                {data['section-header'].text_logo}
              </p>
            </div>
          </a>
          <ul className="items-center sm:text-xs break2:text-base justify-around hidden sm:flex sm:-ml-5 md:gap-0 lg:gap-3 xl:gap-6 2xl:gap-12">
            {data['section-header'].navbar.map((item, index) => (
              <li
                key={index}
                className="min-w-max-content whitespace-nowrap ml-6"
              >
                <Link
                  to={item.toLowerCase().replace(/\s+/g, '')}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="font-bold text-gray_default hover:text-primary active:text-primary cursor-pointer"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="items-center text-[12px] break2:text-[1rem] hidden sm:flex -space-x-4 sm:pl-8 xl:space-x-6 min-w-max-content px-4">
            <a
              href={data.bolg.url}
              target="_blank"
              className="font-bold text-gray_default hover:text-primary active:text-primary"
            >
              {data['section-header'].blog}
            </a>
            <button
              onClick={handleContactClick}
              className="sm:bg-transparent text-gray_default hover:text-primary active:text-primary py-2 px-6 md:py-3 md:px-9 cursor-pointer whitespace-nowrap button-class"
            >
              <p className="font-bold ">{data['section-header'].contact}</p>
            </button>
          </div>
          <div className="sm:hidden">
            {isMenuOpen ? (
              <div className="relative w-1/2">
                <HiX
                  onClick={handleMenuOpen}
                  className="text-primary w-8 h-8 cursor-pointer"
                />
                <div className="absolute z-40 right-0 bg-gray_light bg-opacity-90 w-[160px] text-center px-6 rounded-sm shadow-xl">
                  <ul className="">
                    {data['section-header'].navbar.map((item, index) => (
                      <li
                        key={index}
                        className="min-w-max-content whitespace-nowrap my-4"
                      >
                        <Link
                          to={item.toLowerCase().replace(/\s+/g, '')}
                          spy={false}
                          smooth={true}
                          duration={1000}
                          offset={-80}
                          className="font-bold text-white text-[14px] hover:text-primary active:text-gray_dark"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                    <div className="flex flex-col gap-4">
                      <a
                        href={data.bolg.url}
                        target="_blank"
                        className="font-bold text-white text-[14px] hover:text-primary active:text-gray_dark"
                      >
                        {data['section-header'].blog}
                      </a>
                      <a
                        className="font-bold text-white text-[14px] pb-4 hover:text-primary active:text-gray_dark"
                        onClick={handleContactClick}
                      >
                        {data['section-header'].contact}
                      </a>
                    </div>
                  </ul>
                </div>
              </div>
            ) : (
              <HiMenu
                onClick={handleMenuOpen}
                className="text-primary w-8 h-8 cursor-pointer"
              />
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
