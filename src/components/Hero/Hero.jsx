import React from 'react';
import data from '../../data.json';

function Hero() {
  const words = data['section-one'].title.split(' ');

  return (
    <div className="relative">
      <div className="grid sm:grid-cols-2 gap-2 mt-16 sm:mt-20">
        <div className="px-4 flex flex-col justify-center items-center text-3xl sm:text-4xl md:text-5xl font-bold">
          <h2
            className="text-left sm:text-end mb-4"
            style={{ lineHeight: '1.2' }}
          >
            {words.map((word, index) => (
              <span
                key={index}
                style={{
                  color: word === 'Connecting' ? '#2B88D9' : 'inherit',
                }}
              >
                {word}{' '}
              </span>
            ))}
          </h2>
          <img
            src={data['section-one'].image}
            alt={data['section-one'].alt}
            height="auto"
            className="block sm:hidden mx-auto w-full rounded-md mb-4"
          />
        </div>
        <div className="hidden sm:block">
          <img
            src={data['section-one'].image}
            alt={data['section-one'].alt}
            className="mx-auto w-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
