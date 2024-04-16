import React from "react";

function Circles({ diameter, x, y }) {
  const diameter1 = diameter;
  const diameter2 = diameter / 1.3;
  const diameter3 = diameter / 2.2;

  return (
    <div className="relative opacity-30">
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className="absolute transform -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{ width: `${diameter1}px`, height: `${diameter1}px` }}
          className="bg-white bg-opacity-50 rounded-full flex items-center justify-center"
        >
          {}
        </div>
      </div>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className="absolute transform -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{ width: `${diameter2}px`, height: `${diameter2}px` }}
          className="bg-white bg-opacity-60 rounded-full flex items-center justify-center"
        >
          {}
        </div>
      </div>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className="absolute transform -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{ width: `${diameter3}px`, height: `${diameter3}px` }}
          className="bg-white bg-opacity-95 rounded-full flex items-center justify-center"
        >
          {}
        </div>
      </div>
    </div>
  );
}

export default Circles;
