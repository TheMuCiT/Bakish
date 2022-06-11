import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m14.858 14.184-3.873-3.81a6.126 6.126 0 0 0 1.638-4.163C12.622 2.78 9.796 0 6.31 0S0 2.78 0 6.21s2.825 6.211 6.311 6.211c1.506 0 2.887-.52 3.972-1.387l3.888 3.826a.49.49 0 0 0 .687 0 .473.473 0 0 0 0-.676Zm-8.547-2.718c-2.95 0-5.34-2.353-5.34-5.255 0-2.903 2.39-5.255 5.34-5.255 2.95 0 5.34 2.352 5.34 5.255 0 2.902-2.39 5.255-5.34 5.255Z"
      fill="#A3A3A3"
    />
  </Svg>
);

export default SvgComponent;
