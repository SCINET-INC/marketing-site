import React from "react";
import { Svg } from "../../lib/styles";
import { ISVGProps } from "../../lib";

export default function MoneyBag({ color }: ISVGProps) {
  return (
    <Svg width={120} height={120} fill="none" viewBox="0 0 120 120">
      <g transform="matrix(5,0,0,5,0,0)">
        <g>
          <path
            color={color}
            d="M13.5,8.15c2.14,1.52,4.93,4.4,4.93,7.7S15.55,21.5,12,21.5s-6.42-2.31-6.42-5.65,2.78-6.18,4.92-7.7L8.23,5a1.12,1.12,0,0,1,.23-1.29,1,1,0,0,1,1.26-.15.88.88,0,0,0,1.15-.25l.22-.3A1.12,1.12,0,0,1,12,2.5a1.14,1.14,0,0,1,.92.47l.22.3a.88.88,0,0,0,1.15.25,1,1,0,0,1,1.26.15A1.1,1.1,0,0,1,15.77,5Z"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <line
            color={color}
            x1="8.5"
            y1="8"
            x2="15.5"
            y2="8"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></line>
          <path
            color={color}
            d="M4.5,20a4,4,0,0,1-4-4A7.35,7.35,0,0,1,4,10L2.76,7.83a.7.7,0,0,1,0-.75.72.72,0,0,1,.71-.28,5.07,5.07,0,0,0,2,0,.72.72,0,0,1,.71.28.7.7,0,0,1,0,.75L5,10"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <line
            color={color}
            x1="2.5"
            y1="10"
            x2="5"
            y2="10"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></line>
          <path
            color={color}
            d="M19.5,20a4,4,0,0,0,4-4A7.35,7.35,0,0,0,20,10l1.24-2.17a.7.7,0,0,0,0-.75.72.72,0,0,0-.71-.28,5.07,5.07,0,0,1-2,0,.72.72,0,0,0-.71.28.7.7,0,0,0,0,.75L19,10"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <line
            color={color}
            x1="21.5"
            y1="10"
            x2="19"
            y2="10"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></line>
          <line
            color={color}
            x1="12"
            y1="17.5"
            x2="12"
            y2="18.5"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></line>
          <line
            color={color}
            x1="12"
            y1="12.5"
            x2="12"
            y2="13.5"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></line>
          <path
            color={color}
            d="M10,17.5h3a1,1,0,0,0,0-2H11a1,1,0,0,1,0-2h3"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </g>
    </Svg>
  );
}
