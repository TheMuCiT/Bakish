import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)" fill={props.color}>
      <Path d="M8 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-6.667a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334ZM8 9.334a6.007 6.007 0 0 0-6 6 .666.666 0 1 0 1.333 0 4.667 4.667 0 0 1 9.334 0 .667.667 0 1 0 1.333 0 6.007 6.007 0 0 0-6-6Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;
