import {View, Text} from 'react-native';

import ComingSoonSVG from '../../assets/icons/ComingSoon';

import styles from './styles';

const ComingSoon = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coming Soon</Text>
      <ComingSoonSVG />
    </View>
  );
};

export default ComingSoon;
