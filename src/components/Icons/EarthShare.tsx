import React from "react";
import { Svg } from "../../lib";

type IEarthShareProps = {
  color: string;
};

export default function EarthShare({ color }: IEarthShareProps) {
  return (
    <Svg width={120} height={120} fill="none" viewBox="0 0 120 120">
      <g transform="matrix(5,0,0,5,0,0)">
        <g>
          <g>
            <path
              d="M10.5,21.49A10.5,10.5,0,1,1,21.32,9"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M.66,9.17H6.21A2.72,2.72,0,0,1,8.15,10l1,1a2.73,2.73,0,0,1,.11,3.76L8,16.16A2.72,2.72,0,0,0,7.35,18v2.87"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M18.54,3.7H13.25a2.05,2.05,0,1,0,0,4.1h.39A2.74,2.74,0,0,1,15.92,9l1.4,2.1"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
          <g>
            <circle
              cx="13.75"
              cy="18.25"
              r="2.25"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            ></circle>
            <circle
              cx="21.25"
              cy="21.25"
              r="2.25"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            ></circle>
            <circle
              cx="21.25"
              cy="13.75"
              r="2.25"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            ></circle>
            <line
              x1="15.67"
              y1="17.09"
              x2="19.33"
              y2="14.9"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            ></line>
            <line
              x1="15.84"
              y1="19.09"
              x2="19.16"
              y2="20.41"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            ></line>
          </g>
        </g>
      </g>
    </Svg>
  );
}
