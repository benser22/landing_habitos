import React from 'react';
import data from '../../data.json';

function OneSection() {
  const words = data['section-three'].title.split(' ');
  return (
    <div className="mt-0 sm:mt-14">
      <div className="flex flex-col-reverse mx-auto items-center gap-4 sm:gap-8 sm:flex-row">
        <img
          src={data['section-three'].image1}
          alt={data['section-three'].alt1}
          width="35%"
          height="auto"
          className="hidden sm:block mt-3 px-4 sm:px-0 mx-auto h-[450px] object-cover"
        />
        <div className="flex flex-col gap-2 mt-6 sm:mt-0">
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold px-4 sm:px-0">
            <h2 style={{ lineHeight: '1.2' }}>
              {words.map((word, index) => (
                <span
                  key={index}
                  style={{
                    color: word === 'mission...' ? '#2B88D9' : 'inherit',
                  }}
                >
                  {word}{' '}
                </span>
              ))}
            </h2>
          </div>
          <p
            className="text-[#6A6A6A] text-lg mb-4 px-4 sm:px-0"
            style={{ lineHeight: '1.2' }}
          >
            {data['section-three'].subtitle}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={data['section-three'].image2}
              alt={data['section-three'].alt2}
              className="hidden sm:block sm:w-full px-4 sm:px-0 h-[92%] object-cover mx-auto col-span-2 sm:col-span-1"
            />
            <img
              src={data['section-three'].image3}
              alt={data['section-three'].alt3}
              className="sm:w-full px-4 sm:px-0 h-[92%] object-cover mx-auto col-span-2 sm:col-span-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default OneSection;
