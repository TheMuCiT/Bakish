import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    shadowColor: colors.shadowColor,
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.25,
    borderRadius: 8,
    elevation: 20,
  },
  favorite: {
    position: 'absolute',
    right: 12,
    top: 12,
    zIndex: 2,
    backgroundColor: colors.white,
    padding: 8,
    borderRadius: 4,
  },
  add: {
    position: 'absolute',
    right: 7,
    bottom: 10,
    zIndex: 2,
    backgroundColor: colors.textDark,
    padding: 9,
    borderRadius: 15,
  },
  imageContainer: {
    marginHorizontal: 7,
    marginVertical: 6,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.grey,
    paddingVertical: 10,
  },
  image: {
    width: '70%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  content: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  title: {
    color: colors.textDark,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.xs,
  },
  text: {
    color: colors.textDark,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.xs,
  },
  price: {
    color: colors.textDark,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.sm,
  },
});

export default styles;
