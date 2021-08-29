import React from "react";
import { Svg } from "../../lib/styles";

type IPresentationProps = {
  color: string;
};

export default function Presentation({ color }: IPresentationProps) {
  return (
    <Svg width={120} height={120} fill="none" viewBox="0 0 120 120">
      <g transform="matrix(5,0,0,5,0,0)">
        <path
          fill="none"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="20"
          d="M15.8,12.3c0.8,0,1.5-0.7,1.5-1.5s-0.7-1.5-1.5-1.5l0,0c-0.8,0-1.5,0.7-1.5,1.5S14.9,12.3,15.8,12.3z"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="20"
          d="M15.8,17.8c0.8,0,1.5-0.7,1.5-1.5c0-0.8-0.7-1.5-1.5-1.5c0,0,0,0,0,0c-0.8,0-1.5,0.7-1.5,1.5
		C14.3,17.1,14.9,17.7,15.8,17.8C15.8,17.8,15.8,17.8,15.8,17.8z"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="20"
          d="M15.8,6.8c0.8,0,1.5-0.7,1.5-1.5s-0.7-1.5-1.5-1.5l0,0c-0.8,0-1.5,0.7-1.5,1.5S14.9,6.8,15.8,6.8z"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="20"
          d="M6.8,12.3v-3h3v3H6.8z"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="20"
          d="M14.3,16.3H9.8c-0.6,0-1-0.4-1-1v-3"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="20"
          d="M9.8,10.8h4.5"
        />
        <path
          fill="none"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="20"
          d="M8.8,9.3v-3c0-0.6,0.4-1,1-1h4.5"
        />
      </g>
    </Svg>
  );
}
