import React from 'react';

const SvgPath = () => {
  return (
    <svg
      viewBox="0 0 1080 200"
      preserveAspectRatio="xMidYMid meet"
      className="w-full h-[200px] overflow-visible"
    >
      <defs>
        <filter id="whiteShadowTopOnly" x="-100%" y="-200%" width="300%" height="500%">
          <feDropShadow
            dx="0"
            dy="-10"                 // shift shadow upward
            stdDeviation="20"       // increase spread
            floodColor="white"
            floodOpacity="1"
          />
        </filter>
      </defs>

      <path
        d="M0,120 Q540,-60 1080,120"
        stroke="#9fb2c3"
        strokeWidth="4"
        fill="transparent"
        filter="url(#whiteShadowTopOnly)"
      />
    </svg>
  );
};

export default SvgPath;
