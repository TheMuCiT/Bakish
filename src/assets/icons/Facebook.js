import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={14}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M8.9 26.402V14.36h4.04l.606-4.695H8.9V6.67c0-1.36.375-2.285 2.326-2.285l2.484-.001v-4.2C13.28.129 11.806 0 10.09 0 6.506 0 4.053 2.187 4.053 6.204v3.461H0v4.695h4.053v12.042H8.9Z"
      fill="#4A46FF"
    />
  </Svg>
);

export default SvgComponent;
