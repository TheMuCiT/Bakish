import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={35}
    height={34}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m35 16.649-3.962-4.4.62-5.888-5.794-1.227L22.91 0 17.5 2.417l-.73 14.232.73 14.231 5.41 2.418 2.954-5.134 5.794-1.227-.62-5.89L35 16.65Z"
      fill="#FFCA7A"
    />
    <Path
      d="M12.09 0 9.137 5.134 3.342 6.361l.62 5.889L0 16.649l3.962 4.399-.62 5.889 5.794 1.227 2.955 5.133L17.5 30.88V2.417L12.09 0Z"
      fill="#FEB74D"
    />
    <Path
      d="m24.837 12.817-1.532-1.367-5.805 6.503-.73 1.616.73 1.467 7.337-8.219Z"
      fill="#F7F0EB"
    />
    <Path
      d="m11.4 15.102-1.452 1.452 6.104 6.105 1.448-1.623v-3.083l-1.533 1.717-4.567-4.568Z"
      fill="#FFFBF5"
    />
  </Svg>
);

export default SvgComponent;
