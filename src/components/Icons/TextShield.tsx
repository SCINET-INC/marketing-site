import React from "react";
import { Svg } from "../../lib";

type ITextShieldProps = {
  color: string;
};

export default function TextShield({ color }: ITextShieldProps) {
  return (
    <Svg width={120} height={120} fill="none" viewBox="0 0 120 120">
      <g transform="matrix(5,0,0,5,0,0)">
        <path
          d="M4.5 8.5L14 8.5"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M4.5 11.5L8.5 11.5"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M4.5 5.5L11.5 5.5"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M4.5 14.5L8.5 14.5"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M4.5 17.5L8.5 17.5"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M10.5,23.5h-9a1,1,0,0,1-1-1V1.5a1,1,0,0,1,1-1H14.793A1,1,0,0,1,15.5.793L19.207,4.5a1,1,0,0,1,.293.707V8.5"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M17.5 13.5L17.5 19.5"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M20.5 16.5L14.5 16.5"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M18.035,23.4l.553-.21c2.63-1,4.912-3.524,4.912-6.338V13.456a1.044,1.044,0,0,0-.628-.958,15.814,15.814,0,0,0-5.394-1,15.521,15.521,0,0,0-5.35,1,1.044,1.044,0,0,0-.628.958v3.393c0,2.814,2.238,5.336,4.868,6.338l.553.21A1.561,1.561,0,0,0,18.035,23.4Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </Svg>
  );
}
