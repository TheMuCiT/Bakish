import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  delivery: {
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deliveryTitle: {
    fontSize: fonts.size.default,
    fontFamily: fonts.family.regular,
    color: colors.textDark,
  },
  deliverySubTitle: {
    fontSize: fonts.size.xxs,
    fontFamily: fonts.family.regular,
    color: colors.textSubTitle,
  },
  deliveryStepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  lineActive: {
    backgroundColor: colors.main,
  },
  line: {
    width: 55,
    height: 5,
    borderRadius: 4,
    backgroundColor: colors.grey,
    marginHorizontal: 5,
  },
});

export default styles;
