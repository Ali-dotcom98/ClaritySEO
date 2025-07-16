import React from 'react';

const SvgPath = () => {
  return (
    <svg
      viewBox="0 0 1080 200"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-[200px] overflow-visible"
    >
      <defs>
       
        <filter id="doubleGlow" x="-100%" y="-400%" width="400%" height="600%">
          <feDropShadow
            dx="0"
            dy="-20"
            stdDeviation="50"
            floodColor="#fb923c"
            floodOpacity="1"
          />
          <feDropShadow
            dx="0"
            dy="-10"
            stdDeviation="25"
            floodColor="#fb923c"
            floodOpacity="0.6"
          />
        </filter>
      </defs>

      <path
        d="M0,120 Q540,-60 1080,120"
        stroke="#fb923c"
        strokeWidth="3"
        fill="transparent"
        filter="url(#doubleGlow)"
      
      />
    </svg>
  );
};

export default SvgPath;
