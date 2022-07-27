import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M21.933 12.875A10.03 10.03 0 1 1 19.093 5H15.97a1 1 0 1 0 0 2h4.143a1.858 1.858 0 0 0 1.857-1.857V1a1 1 0 0 0-1-1 1 1 0 0 0-1 1v2.078A11.985 11.985 0 1 0 23.92 13.1a1.006 1.006 0 0 0-1-1.1.982.982 0 0 0-.988.875Z"
      fill="#FEB74D"
    />
  </Svg>
);

export default SvgComponent;
