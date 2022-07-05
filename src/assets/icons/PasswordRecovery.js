import * as React from 'react';
import Svg, {Path, Mask, G} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={27}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M25.677 12.375h-2.171v-2.75C23.506 4.318 18.962 0 13.376 0 7.792 0 3.249 4.318 3.249 9.625v2.75h-2.17c-.4 0-.724.307-.724.688V30.25C.354 31.767 1.65 33 3.248 33h20.258c1.596 0 2.894-1.233 2.894-2.75V13.062c0-.38-.324-.687-.723-.687ZM15.543 26.737a.667.667 0 0 1-.18.534.741.741 0 0 1-.54.229H11.93a.741.741 0 0 1-.54-.229.667.667 0 0 1-.18-.534l.457-3.9c-.741-.513-1.184-1.323-1.184-2.212 0-1.517 1.298-2.75 2.894-2.75s2.894 1.233 2.894 2.75c0 .889-.443 1.7-1.184 2.212l.456 3.9Zm3.622-14.362H7.589v-2.75c0-3.033 2.596-5.5 5.788-5.5 3.191 0 5.788 2.467 5.788 5.5v2.75Z"
      fill="#FEB74D"
    />
    <Mask
      id="a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={27}
      height={33}>
      <Path
        d="M25.667 12.375h-2.2v-2.75C23.467 4.318 18.86 0 13.2 0S2.933 4.318 2.933 9.625v2.75h-2.2c-.405 0-.733.307-.733.688V30.25C0 31.767 1.316 33 2.933 33h20.534c1.617 0 2.933-1.233 2.933-2.75V13.062c0-.38-.328-.687-.733-.687ZM15.396 26.737a.662.662 0 0 1-.183.534.756.756 0 0 1-.546.229h-2.934a.756.756 0 0 1-.546-.229.662.662 0 0 1-.183-.534l.463-3.9c-.751-.513-1.2-1.323-1.2-2.212 0-1.517 1.315-2.75 2.933-2.75 1.618 0 2.933 1.233 2.933 2.75 0 .889-.449 1.7-1.2 2.212l.463 3.9Zm3.67-14.362H7.334v-2.75c0-3.033 2.632-5.5 5.867-5.5s5.867 2.467 5.867 5.5v2.75Z"
        fill="#FFCA7A"
      />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#FFCA7A" d="M13.51 0H26.4v33H13.51z" />
    </G>
  </Svg>
);

export default SvgComponent;
