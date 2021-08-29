import React from "react";
import { Svg } from "../../lib/styles";

type ICloudHandProps = {
  color: string;
};

export default function CloudHand({ color }: ICloudHandProps) {
  return (
    <Svg width={120} height={120} fill="none" viewBox="0 0 120 120">
      <g transform="matrix(5,0,0,5,0,0)">
        <path
          d="M20.5,13.907A4.313,4.313,0,0,0,23,9.858a4.711,4.711,0,0,0-4.954-4.635A6.707,6.707,0,0,0,12,1.5,6.605,6.605,0,0,0,5.325,7.609,3.561,3.561,0,0,0,1,11.018,3.186,3.186,0,0,0,3.5,14.3"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M6.000 16.501 A6.000 6.000 0 1 0 18.000 16.501 A6.000 6.000 0 1 0 6.000 16.501 Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14.674,14.757l-2.9,3.874a.75.75,0,0,1-1.13.08l-1.5-1.5"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </Svg>
  );
}
