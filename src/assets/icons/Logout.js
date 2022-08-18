import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)" fill="#000">
      <Path d="M9.393 6.75a.75.75 0 0 0 .75-.75V3.75a2.25 2.25 0 0 1 2.25-2.25h1.857a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-1.857a2.25 2.25 0 0 1-2.25-2.25V12a.75.75 0 1 0-1.5 0v2.25a3.754 3.754 0 0 0 3.75 3.75h1.857A3.754 3.754 0 0 0 18 14.25V3.75A3.755 3.755 0 0 0 14.25 0h-1.857a3.755 3.755 0 0 0-3.75 3.75V6a.75.75 0 0 0 .75.75Z" />
      <Path d="m.85 10.59 3.44 3.44a.75.75 0 1 0 1.06-1.06L2.153 9.772 13.5 9.75a.75.75 0 1 0 0-1.5l-11.391.023L5.351 5.03a.75.75 0 1 0-1.06-1.06L.85 7.41a2.25 2.25 0 0 0-.001 3.18Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="rotate(-180 9 9)" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;
