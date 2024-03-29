import { keyframes } from "styled-components";

export const WaveAnimation = keyframes`
  0% {
      transform: rotate(0deg);
  }
  10% {
      transform: rotate(14deg);
  } /* The following five values can be played with to make the waving more or less extreme */
  20% {
      transform: rotate(-8deg);
  }
  30% {
      transform: rotate(14deg);
  }
  40% {
      transform: rotate(-4deg);
  }
  50% {
      transform: rotate(10deg);
  }
  60% {
      transform: rotate(0deg);
  } /* Reset for the last half to pause */
  100% {
      transform: rotate(0deg);
  }
`;

export const Back = keyframes`
  100% {
      background-position: 2000px 0;
  }
`;

export const ZoomInZoomOut = keyframes`
  0% {
      transform: scale(1, 1);
  }
  50% {
      transform: scale(1.1, 1.1);
  }
  100% {
      transform: scale(1, 1);
  }
`;
