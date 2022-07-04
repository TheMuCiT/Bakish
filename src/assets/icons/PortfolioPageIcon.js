import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={15}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G fill={props.color}>
      <Path d="M7.034 11.589c-3.793 0-7.034.598-7.034 2.99 0 2.393 3.22 3.013 7.034 3.013 3.794 0 7.035-.597 7.035-2.99 0-2.394-3.22-3.013-7.035-3.013ZM7.034 9.309a4.654 4.654 0 1 0-4.655-4.655A4.639 4.639 0 0 0 7.034 9.31Z" />
    </G>
  </Svg>
);

export default SvgComponent;
