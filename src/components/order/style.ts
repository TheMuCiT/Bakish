import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 25,
    marginVertical: 10,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,

    backgroundColor: colors.white,
    shadowColor: colors.shadowColor,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.25,
    elevation: 20,
  },

  rootMain: {
    marginHorizontal: 25,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  orderInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  orderText: {
    color: colors.textDark,
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.semiBold,
  },

  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  time: {
    color: colors.textDark,
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.medium,
    opacity: 0.6,
  },

  line: {
    marginHorizontal: 10,
    height: '70%',
    width: 1,
    backgroundColor: colors.textDark,
    opacity: 0.6,
  },

  total: {
    color: colors.textDark,
    fontSize: fonts.size.default,
    fontFamily: fonts.family.semiBold,
  },

  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },

  orderItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    width: 75,
    aspectRatio: 1,
    resizeMode: 'contain',
  },

  orderItemText: {
    marginLeft: 20,
  },
  orderItemName: {
    color: colors.textDark,
    fontSize: fonts.size.xs,
    fontFamily: fonts.family.semiBold,
  },

  orderItemName2: {
    color: colors.textDark,
    fontSize: fonts.size.xs,
    fontFamily: fonts.family.regular,
    marginRight: 10,
  },

  price: {
    color: colors.textDark,
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.semiBold,
  },
});

export default styles;
