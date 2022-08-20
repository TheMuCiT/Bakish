import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={24}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M6.91 2.962h15.796a.987.987 0 0 0 0-1.974H6.911a.987.987 0 1 0 0 1.974ZM22.706 7.898H6.911a.987.987 0 1 0 0 1.974h15.796a.987.987 0 0 0 0-1.974ZM22.706 14.809H6.911a.987.987 0 1 0 0 1.974h15.796a.987.987 0 0 0 0-1.974ZM1.974 3.949a1.974 1.974 0 1 0 0-3.949 1.974 1.974 0 0 0 0 3.949ZM1.974 10.86a1.975 1.975 0 1 0 0-3.95 1.975 1.975 0 0 0 0 3.95ZM1.974 17.77a1.974 1.974 0 1 0 0-3.95 1.974 1.974 0 0 0 0 3.95Z"
      fill={props.color}
    />
  </Svg>
);

export default SvgComponent;
