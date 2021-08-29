import React from "react";
import { Svg } from "../../lib";

type IDonationHeartProps = {
  color: string;
};

export default function DonationHeart({ color }: IDonationHeartProps) {
  return (
    <Svg width={120} height={120} fill="none" viewBox="0 0 120 120">
      <g transform="matrix(5,0,0,5,0,0)">
        <defs></defs>
        <path
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.343,12.035a1.857,1.857,0,0,0,1.632.9,1.713,1.713,0,0,0,1.811-1.595,1.713,1.713,0,0,0-1.811-1.594,1.715,1.715,0,0,1-1.812-1.6,1.716,1.716,0,0,1,1.812-1.595,1.861,1.861,0,0,1,1.632.9"
        ></path>
        <line
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="11.975"
          y1="12.937"
          x2="11.975"
          y2="14"
        ></line>
        <line
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="11.975"
          y1="5.494"
          x2="11.975"
          y2="6.556"
        ></line>
        <path
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.043,1.5a5.189,5.189,0,0,1,7.7,1.873h0a5.188,5.188,0,0,1-.971,5.987L12,18.5,3.234,9.355a5.187,5.187,0,0,1-.972-5.987h0A5.189,5.189,0,0,1,9.908,1.459l2.114,2.115Z"
        ></path>
        <line
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="11.975"
          y1="18.5"
          x2="11.975"
          y2="23.5"
        ></line>
        <ellipse
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          cx="17.924"
          cy="19.949"
          rx="4.171"
          ry="2.25"
          transform="translate(-8.856 18.517) rotate(-45)"
        ></ellipse>
        <ellipse
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          cx="6.026"
          cy="19.949"
          rx="2.25"
          ry="4.171"
          transform="translate(-12.341 10.104) rotate(-45)"
        ></ellipse>
      </g>
    </Svg>
  );
}
