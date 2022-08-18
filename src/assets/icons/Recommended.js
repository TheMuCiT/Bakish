import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={15}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10.15 0c-1.116 0-2.13.424-2.9 1.114A4.328 4.328 0 0 0 4.35 0 4.35 4.35 0 0 0 0 4.35C0 7.344 3.25 10.969 7.25 13c4-2.031 7.25-5.656 7.25-8.65A4.35 4.35 0 0 0 10.15 0Z"
      fill={props.color || '#999'}
    />
    <Path
      d="M3 5.103C3 2.877 4.217.989 5.911.292A4.35 4.35 0 0 0 0 4.35C0 7.344 3.25 10.969 7.25 13l.01-.005C4.75 10.652 3 7.679 3 5.103Z"
      fill={props.color || '#999'}
    />
    <Path
      d="M10.15 0c-.095 0-.188.007-.282.013C11.754.15 13.25 2.037 13.25 4.35c0 2.994-2.69 6.619-6 8.65 4-2.031 7.25-5.656 7.25-8.65A4.35 4.35 0 0 0 10.15 0Z"
      fill="#D7D7D7"
    />
    <Path
      d="M11.75 4.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM11.375 2.75a.375.375 0 1 0 0-.75.375.375 0 0 0 0 .75Z"
      fill="#D7D7D7"
    />
  </Svg>
);

export default SvgComponent;
