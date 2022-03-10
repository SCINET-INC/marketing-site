import React from "react";
import { Svg } from "../../lib/styles";

type ICloudHandProps = {
  color?: string;
};

export default function CheckMark({ color }: ICloudHandProps) {
  return (
    <Svg width={50} height={50} fill="none" viewBox="0 0 50 50">
      <g transform="matrix(2,0,0,2,0,0)">
        <path
          fill="#7400B8"
          d="M1.8 12.5L0.5 14.5L9.5 23.5L22.5 1.5L8 17L1.8 12.5Z"
        ></path>
        <path
          fill="#7400B8"
          d="M16.6 11.6L16.5 11.5L9 20L0.5 14.5L9.5 23.5L16.6 11.6Z"
        ></path>
        <path
          stroke="#caff33"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="M1.8 12.5L0.5 14.5L9.5 23.5L22.5 1.5L8 17L1.8 12.5Z"
        ></path>
        <path
          stroke="#caff33"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="M1.8 12.5L0.5 14.5L9.5 23.5L22.5 1.5L8 17L1.8 12.5Z"
        ></path>
      </g>
    </Svg>
  );
}
