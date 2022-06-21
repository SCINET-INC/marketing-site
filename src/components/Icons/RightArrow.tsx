import React from "react";
import { Svg } from "../../lib/styles";

type IRightArrowProps = {
  color?: string;
  className?: string;
};

export default function RightArrow({ color, className }: IRightArrowProps) {
  return (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      height="24px"
      width="24px"
      className={className}
    >
      <path
        d="M23.987,12a2.411,2.411,0,0,0-.814-1.8L11.994.361a1.44,1.44,0,0,0-1.9,2.162l8.637,7.6a.25.25,0,0,1-.165.437H1.452a1.44,1.44,0,0,0,0,2.88H18.563a.251.251,0,0,1,.165.438l-8.637,7.6a1.44,1.44,0,1,0,1.9,2.161L23.172,13.8A2.409,2.409,0,0,0,23.987,12Z"
        fill={color || "#000000"}
      ></path>
    </Svg>
  );
}
