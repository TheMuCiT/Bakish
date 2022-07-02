import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={9}
    height={2}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 .85A.85.85 0 0 1 .85 0h7.3a.85.85 0 0 1 0 1.7H.85A.85.85 0 0 1 0 .85Z"
      fill="#1F1F1F"
    />
  </Svg>
);

export default SvgComponent;
