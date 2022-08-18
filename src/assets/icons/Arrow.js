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
      d="M.196.193a.647.647 0 0 0 0 .925L3.61 4.427a.114.114 0 0 1 .036.081.11.11 0 0 1-.036.082L.196 7.9a.643.643 0 0 0 .016.91c.124.12.291.188.466.19a.688.688 0 0 0 .473-.175l3.413-3.31a1.377 1.377 0 0 0 0-2.016L1.151.19A.677.677 0 0 0 .673 0a.692.692 0 0 0-.477.193Z"
      fill="#FEB74D"
    />
  </Svg>
);

export default SvgComponent;
