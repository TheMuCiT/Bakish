import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={13}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M12.966 4.987a.69.69 0 0 0-.595-.475l-3.752-.34L7.135.697a.691.691 0 0 0-1.27 0L4.38 4.172l-3.753.34a.69.69 0 0 0-.392 1.21l2.836 2.487-.836 3.684a.69.69 0 0 0 1.027.747L6.5 10.704l3.235 1.935a.691.691 0 0 0 1.028-.746l-.836-3.685 2.837-2.487a.691.691 0 0 0 .202-.734Z"
        fill="#999"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h13v13H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;
