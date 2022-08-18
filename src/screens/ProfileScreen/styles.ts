import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  page: {
    overflow: 'visible',
    flex: 1,
    backgroundColor: colors.white,
  },
  pageContainer: {
    paddingHorizontal: 25,
  },
  picture: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  pictureLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  pictureImage: {
    padding: 5,
    backgroundColor: colors.grey,
    borderRadius: 15,
  },

  pictureText: {
    marginLeft: 20,
  },

  pictureName: {
    color: colors.textDark,
    fontSize: fonts.size.md,
    fontFamily: fonts.family.semiBold,
  },
  pictureUserSince: {
    color: colors.textDark,
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.light,
  },

  orders: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
  },

  ordersItem: {
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  ordersItemMiddle: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: colors.separatorLineColor,
  },

  ordersItemText: {
    color: colors.textDark,
    fontSize: fonts.size.md,
    fontFamily: fonts.family.semiBold,
  },

  ordersItemSubText: {
    color: colors.textDark,
    fontSize: fonts.size.md,
    fontFamily: fonts.family.regular,
    opacity: 0.6,
  },
  content: {
    marginTop: 20,
    marginHorizontal: 15,
  },
  title: {
    color: colors.textDark,
    fontSize: fonts.size.md,
    fontFamily: fonts.family.medium,
    opacity: 0.6,
    marginBottom: 22,
  },
  contentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    alignItems: 'center',
  },
  contentItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentText: {
    marginLeft: 12,
    color: colors.textDark,
    fontSize: fonts.size.md,
    fontFamily: fonts.family.regular,
    opacity: 0.6,
  },
});

export default styles;
