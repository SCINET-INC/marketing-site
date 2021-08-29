import React from "react";
import { Svg } from "../../lib/styles";

type IDiamondProps = {
  color: string;
};

export default function Diamond({ color }: IDiamondProps) {
  return (
    <Svg width={120} height={120} fill="none" viewBox="0 0 120 120">
      <g transform="matrix(5,0,0,5,0,0)">
        <path
          d="M23.254 23.25L23.254 12.25"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M21.192,12.25A8,8,0,0,0,11.253,3.5a1.438,1.438,0,0,0-1.011,1.88h0a1.6,1.6,0,0,0,1.882,1,5,5,0,0,1,6.124,4.631,2.97,2.97,0,0,1-.74,2.093L16.452,14.31a2,2,0,0,1-2.921.1l-2.055-2.055a1.5,1.5,0,1,0-2.122,2.121L13.082,18.7a4,4,0,0,1,1.172,2.828V23.25"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M20.454,7.759a5.005,5.005,0,0,1,2.8,4.491"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M3.254,13.75a2.231,2.231,0,0,0,2.5,2.5c-1.615-.006-2.418.86-2.5,2.5a2.211,2.211,0,0,0-2.5-2.5A2.232,2.232,0,0,0,3.254,13.75Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M3.36 8.25L12.148 8.25"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M10.2,5.25H5.063a.5.5,0,0,0-.447.276L3.406,7.945a.5.5,0,0,0,.076.558l3.9,4.334a.5.5,0,0,0,.744,0l3.9-4.334a.5.5,0,0,0,.076-.558l-.794-1.586"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M1.754 2.25L4.754 2.25"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M3.254 0.75L3.254 3.75"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </Svg>
  );
}
