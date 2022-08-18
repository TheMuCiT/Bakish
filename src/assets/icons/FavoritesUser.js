import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={19}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M13.129.438a4.8 4.8 0 0 0-4.125 2.474A4.8 4.8 0 0 0 4.879.438 5.1 5.1 0 0 0 .004 5.724c0 3.41 3.59 7.135 6.6 9.66a3.73 3.73 0 0 0 4.8 0c3.01-2.525 6.6-6.25 6.6-9.66A5.1 5.1 0 0 0 13.129.438Zm-2.69 13.8a2.23 2.23 0 0 1-2.872 0c-3.853-3.234-6.063-6.336-6.063-8.513a3.6 3.6 0 0 1 3.375-3.787 3.6 3.6 0 0 1 3.375 3.787.75.75 0 0 0 1.5 0 3.6 3.6 0 0 1 3.375-3.787 3.6 3.6 0 0 1 3.375 3.787c0 2.177-2.21 5.28-6.064 8.51v.003Z"
      fill="#1F1F1F"
    />
  </Svg>
);

export default SvgComponent;
