import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={14}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12.75 18a.75.75 0 0 1-.75-.75 5.25 5.25 0 1 0-10.5 0 .75.75 0 1 1-1.5 0 6.75 6.75 0 0 1 13.5 0 .75.75 0 0 1-.75.75Zm-6-9a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm0-7.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
      fill="#1F1F1F"
    />
  </Svg>
);

export default SvgComponent;
