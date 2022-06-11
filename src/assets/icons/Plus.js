import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={9}
    height={9}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M8.209 3.709H5.291V.791a.791.791 0 1 0-1.582 0v2.918H.791a.791.791 0 1 0 0 1.582h2.918v2.918a.791.791 0 1 0 1.582 0V5.291h2.918a.791.791 0 1 0 0-1.582Z"
      fill="#fff"
    />
  </Svg>
);

export default SvgComponent;
