import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={17}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M5.944 16.803v-2.744a1.27 1.27 0 0 1 1.266-1.265H9.78a1.268 1.268 0 0 1 1.274 1.265v2.736a1.103 1.103 0 0 0 1.097 1.097h1.754a3.096 3.096 0 0 0 2.857-1.887c.156-.372.237-.772.237-1.175V7.037a2.213 2.213 0 0 0-.8-1.703L10.237.602a2.788 2.788 0 0 0-3.541.065L.865 5.337A2.214 2.214 0 0 0 0 7.036v7.786a3.08 3.08 0 0 0 3.092 3.07h1.715a1.102 1.102 0 0 0 1.017-.67c.056-.133.085-.276.085-.42h.035Z"
      fill={props.color}
    />
  </Svg>
);

export default SvgComponent;
