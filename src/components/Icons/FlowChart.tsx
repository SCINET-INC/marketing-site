import React from "react";
import { Svg } from "../../lib/styles";

type IFlowChartProps = {
  color: string;
};

export default function FlowChart({ color }: IFlowChartProps) {
  return (
    <Svg width={120} height={120} fill="none" viewBox="0 0 120 120">
      <g transform="matrix(5,0,0,5,0,0)">
        <path
          d="M23.5,23.5H1A.5.5,0,0,1,.5,23V.5"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M6.004 16.500 A1.500 1.500 0 1 0 9.004 16.500 A1.500 1.500 0 1 0 6.004 16.500 Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M16.92 8.315L20.996 3.108"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9.937 7.462L14.555 9.11"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M0.504 11.781L7.223 7.776"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M16.303 15.752L20.708 13.256"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M9.004 16.5L13.504 16.5"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M0.504 21L6.216 17.266"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M7.004 7.000 A1.500 1.500 0 1 0 10.004 7.000 A1.500 1.500 0 1 0 7.004 7.000 Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14.504 9.500 A1.500 1.500 0 1 0 17.504 9.500 A1.500 1.500 0 1 0 14.504 9.500 Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M20.504 2.000 A1.500 1.500 0 1 0 23.504 2.000 A1.500 1.500 0 1 0 20.504 2.000 Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M20.504 12.500 A1.500 1.500 0 1 0 23.504 12.500 A1.500 1.500 0 1 0 20.504 12.500 Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M13.504 16.500 A1.500 1.500 0 1 0 16.504 16.500 A1.500 1.500 0 1 0 13.504 16.500 Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </Svg>
  );
}
