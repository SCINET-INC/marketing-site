import React from "react";
import styled from "styled-components";
import { Svg } from "../../lib";

type ITeamChatProps = {
  color: string;
};

export default function TeamChat({ color }: ITeamChatProps) {
  return (
    <Svg width={120} height={120} fill="none" viewBox="0 0 120 120">
      <g transform="matrix(5,0,0,5,0,0)">
        <path
          d="M13.5 16.5L21 16.5"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M13.5 18.5L18.5 18.5"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14.5,12.5A4.335,4.335,0,0,1,19,8a4.335,4.335,0,0,1,4.5,4.5Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M16.000 3.500 A3.000 3.000 0 1 0 22.000 3.500 A3.000 3.000 0 1 0 16.000 3.500 Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M21.971,3.083A3.608,3.608,0,0,1,20.25,3.5a3.749,3.749,0,0,1-3.375-2.114"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M.5,23.5A4.335,4.335,0,0,1,5,19a4.335,4.335,0,0,1,4.5,4.5Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M2.000 14.500 A3.000 3.000 0 1 0 8.000 14.500 A3.000 3.000 0 1 0 2.000 14.500 Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M7.973,14.1a3.619,3.619,0,0,1-1.694.4,3.751,3.751,0,0,1-3.386-2.136"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12.5,14.5a1,1,0,0,0-1,1v5a1,1,0,0,0,1,1H14v2l2.5-2h6a1,1,0,0,0,1-1v-5a1,1,0,0,0-1-1Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M10 2.5L2.5 2.5"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M7.5 4.5L2.5 4.5"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M11.5.5a1,1,0,0,1,1,1v5a1,1,0,0,1-1,1H10V10L7.5,7.5h-6a1,1,0,0,1-1-1v-5a1,1,0,0,1,1-1Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </Svg>
  );
}
