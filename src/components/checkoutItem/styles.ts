import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 25,
    marginVertical: 10,
  },
  left: {
    flex: 1,
    marginRight: 10,
    backgroundColor: colors.grey,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    flex: 4,
  },
  image: {
    width: '80%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  title: {
    fontSize: fonts.size.default,
    fontFamily: fonts.family.regular,
    color: colors.textDark,
  },
  subTitle: {
    flexDirection: 'row',
  },
  subTitleText: {
    fontSize: fonts.size.xxs,
    fontFamily: fonts.family.regular,
    color: colors.textSubTitle,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.medium,
    color: colors.textDark,
  },

  noFItemContainer: {
    flexDirection: 'row',

    alignItems: 'center',
  },
  noFItem: {
    color: colors.textDark,
    paddingHorizontal: 10,
  },
  noFItemButton: {
    backgroundColor: colors.grey,
    width: 26,
    aspectRatio: 1,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qty: {
    color: colors.textDark,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.xs,
    opacity: 0.5,
  },
});

export default styles;
