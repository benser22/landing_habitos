import React from "react";

function Circles({ largestDiameter, color }) {
  const diameter1 = largestDiameter;
  const diameter2 = largestDiameter - 20;
  const diameter3 = largestDiameter - 40;

  console.log(diameter1, diameter2, diameter3);
  return (
    <div className="flex justify-center items-center h-[500px] bg-yellow-400 relative">
      <div
        className={`w-[${diameter1}px] h-[${diameter1}px] bg-primar rounded-full flex items-center justify-center`}
      >
        {diameter1}
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          className={`w-${diameter2} h-${diameter2} bg-${color}-200 rounded-full flex items-center justify-center`}
        >
          {diameter2}
        </div>
        <div
          className={`w-${diameter3} h-${diameter3} bg-${color}-400 rounded-full flex items-center justify-center`}
        >
          {diameter3}
        </div>
      </div>
    </div>
  );
}

export default Circles;
