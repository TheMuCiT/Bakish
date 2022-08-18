import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={9} cy={9} r={9} fill="#FEB74D" />
    <Path
      d="M6.244 11.533a.183.183 0 0 0 .175.232.17.17 0 0 0 .05-.007l1.702-.486L6.73 9.831l-.486 1.702Z"
      fill="#fff"
    />
    <Path
      d="M6.419 11.771a.187.187 0 0 1-.18-.24l.489-1.711 1.456 1.456-1.714.488a.184.184 0 0 1-.051.007Zm.314-1.93-.483 1.693a.176.176 0 0 0 .218.217l1.692-.484-1.427-1.425ZM12.297 6.478l-.773-.773a.547.547 0 0 0-.775-.001l-.387.387 1.547 1.547.387-.387a.543.543 0 0 0 .16-.387.54.54 0 0 0-.159-.386Z"
      fill="#fff"
    />
    <Path
      d="m11.91 7.647-1.556-1.556.391-.39a.549.549 0 0 1 .782 0l.773.773a.549.549 0 0 1 0 .781l-.39.392Zm-1.539-1.556 1.54 1.539.382-.382a.536.536 0 0 0 .158-.383.536.536 0 0 0-.159-.382l-.772-.774a.539.539 0 0 0-.766 0l-.383.382ZM6.935 9.52l3.17-3.17 1.547 1.547-3.17 3.17L6.935 9.52Z"
      fill="#fff"
    />
    <Path
      d="M8.482 11.076 6.925 9.52l3.18-3.178 1.556 1.555-3.179 3.18ZM6.944 9.52l1.538 1.539 3.162-3.162-1.539-1.538-3.161 3.161Z"
      fill="#fff"
    />
  </Svg>
);

export default SvgComponent;