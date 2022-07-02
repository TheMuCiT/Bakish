import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={5}
    height={9}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.804 8.807a.647.647 0 0 0 0-.925L1.39 4.573a.114.114 0 0 1-.036-.081.11.11 0 0 1 .036-.082L4.804 1.1a.643.643 0 0 0-.016-.91.688.688 0 0 0-.939-.015L.436 3.486a1.413 1.413 0 0 0-.323.46 1.377 1.377 0 0 0 .323 1.555L3.849 8.81a.677.677 0 0 0 .478.19.693.693 0 0 0 .477-.193Z"
      fill="#fff"
    />
  </Svg>
);

export default SvgComponent;
