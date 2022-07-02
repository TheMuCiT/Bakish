import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={11}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10.971 4.157a.59.59 0 0 0-.503-.42l-3.175-.3L6.038.37A.585.585 0 0 0 5.5 0a.584.584 0 0 0-.538.37L3.707 3.437l-3.175.301a.59.59 0 0 0-.503.42.627.627 0 0 0 .17.648L2.6 7l-.707 3.253a.623.623 0 0 0 .227.63.567.567 0 0 0 .642.029L5.5 9.205l2.738 1.708c.2.126.453.114.642-.03a.624.624 0 0 0 .228-.63L8.4 7.002l2.4-2.196a.628.628 0 0 0 .171-.648Z"
      fill="#FEB74D"
    />
  </Svg>
);

export default SvgComponent;
