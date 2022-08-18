import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M9 0a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9Zm7.5 9c0 1.47-.433 2.907-1.246 4.131l-.894-.895a.375.375 0 0 1-.11-.264v-.722A2.25 2.25 0 0 0 12 9H9.75A.75.75 0 0 1 9 8.25v-.375a.375.375 0 0 1 .375-.375 1.875 1.875 0 0 0 1.875-1.875v-.75a.375.375 0 0 1 .375-.375h1.034a1.887 1.887 0 0 0 1.325-.549l.283-.283A7.477 7.477 0 0 1 16.5 9Zm-14.963.722 2.368 2.369a2.235 2.235 0 0 0 1.592.659H7.5a.75.75 0 0 1 .75.75v2.962a7.512 7.512 0 0 1-6.713-6.74Zm8.213 6.74V13.5a2.25 2.25 0 0 0-2.25-2.25H5.497a.75.75 0 0 1-.531-.22L1.622 7.687a7.484 7.484 0 0 1 11.47-4.965l-.168.168a.38.38 0 0 1-.265.11h-1.034A1.875 1.875 0 0 0 9.75 4.875v.75A.375.375 0 0 1 9.375 6 1.875 1.875 0 0 0 7.5 7.875v.375a2.25 2.25 0 0 0 2.25 2.25H12a.75.75 0 0 1 .75.75v.722c.001.496.199.973.549 1.325l1.003 1.002a7.48 7.48 0 0 1-4.552 2.163Z"
        fill="#1F1F1F"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;
