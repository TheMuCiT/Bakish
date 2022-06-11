import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  root: {
    marginBottom: 20,
    height: 105,
  },

  rootContainer: {
    backgroundColor: colors.main,
    paddingTop: 20,
    borderRadius: 8,
    paddingHorizontal: 20,
    height: '100%',
  },
  title: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.semiBold,
    color: colors.white,
  },
  text: {
    fontSize: fonts.size.xs,
    fontFamily: fonts.family.light,
    color: colors.white,
    width: '50%',
  },
  image: {
    position: 'absolute',
    right: 20,
    width: 150,
    aspectRatio: 5 / 3,
  },
});

export default styles;
