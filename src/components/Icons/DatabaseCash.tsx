import React from "react";
import { Svg } from "../../lib/styles";

type IDatabaseCashProps = {
  color: string;
};

export default function DatabaseCash({ color }: IDatabaseCashProps) {
  return (
    <Svg width={120} height={120} fill="none" viewBox="0 0 120 120">
      <g transform="matrix(5,0,0,5,0,0)">
        <path
          d="M0.521 4.501 A9.5 4 0 1 0 19.521 4.501 A9.5 4 0 1 0 0.521 4.501 Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M10.021,12.5c-5.246,0-9.5-1.79-9.5-4"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M8.521,16.95c-4.533-.3-8-1.955-8-3.949"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9.021,21.48c-4.776-.211-8.5-1.912-8.5-3.979V4.5"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M19.521 4.501L19.521 9.001"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M19.02,14.5H16.987a1.342,1.342,0,0,0-.5,2.588l2.063.825a1.341,1.341,0,0,1-.5,2.587H16.02"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M17.52 21.501L17.52 20.501"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M17.52 14.501L17.52 13.501"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M11.520 17.501 A6.000 6.000 0 1 0 23.520 17.501 A6.000 6.000 0 1 0 11.520 17.501 Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </Svg>
  );
}
