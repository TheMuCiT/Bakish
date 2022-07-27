import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M16.486 10.066a61.37 61.37 0 0 0-.463-1.56A19.198 19.198 0 0 1 15 4.165a.833.833 0 1 1 1.667 0 .833.833 0 1 0 1.666 0 2.5 2.5 0 0 0-5 0c.02.637.11 1.27.266 1.887l-4 3.114-4.623-3.334H7.5a.833.833 0 1 0 0-1.666H4.976a1.64 1.64 0 0 0-.969 2.966l4.226 3.093-1.198.932a4.128 4.128 0 1 0 .958 1.365L14.068 7.8c.117.397.605 1.987.713 2.353a4.162 4.162 0 1 0 1.705-.084v-.002Zm-12.32 6.6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm11.667 0a2.5 2.5 0 1 1 0-4.999 2.5 2.5 0 0 1 0 5Z"
      fill={props.color}
    />
  </Svg>
);

export default SvgComponent;
