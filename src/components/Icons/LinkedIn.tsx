import React from "react";
import { Svg } from "../../lib/styles";

type ILinkedInProps = {
  color: string;
};

export default function LinkedIn({ color }: ILinkedInProps) {
  return (
    <Svg width={24} height={24} fill="none" viewBox="0 0 48 48">
      <g transform="matrix(2,0,0,2,0,0)">
        <g>
          <rect
            x="2"
            y="8.5"
            width="5"
            height="14"
            rx="0.5"
            fill={color || "#000000"}
          ></rect>
          <path
            d="M4.48,6.5A2.5,2.5,0,1,0,2,4,2.49,2.49,0,0,0,4.48,6.5Z"
            fill={color || "#000000"}
          ></path>
          <path
            d="M18.5,22.5h3A.5.5,0,0,0,22,22V13.6C22,9.83,19.87,8,16.89,8a4.22,4.22,0,0,0-3.18,1.28.39.39,0,0,1-.45.09A.4.4,0,0,1,13,9a.5.5,0,0,0-.5-.5h-3A.5.5,0,0,0,9,9V22a.5.5,0,0,0,.5.5h3A.5.5,0,0,0,13,22V14.5a2.5,2.5,0,0,1,5,0V22A.5.5,0,0,0,18.5,22.5Z"
            fill={color || "#000000"}
          ></path>
        </g>
      </g>
    </Svg>
  );
}
