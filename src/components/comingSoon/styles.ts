import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 128,
    height: 128,
    borderRadius: 70,
    borderColor: colors.main,
    borderWidth: 2,
  },
  text: {
    color: colors.main,
    marginBottom: 10,
  },
});

export default styles;
