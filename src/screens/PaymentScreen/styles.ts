import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  page: {
    overflow: 'visible',
    flex: 1,
    backgroundColor: colors.white,
  },
  chooseDeliveryOption: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 25,
  },
  deliveryOption: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    marginRight: 16,
    paddingVertical: 17,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  deliveryOptionActive: {
    backgroundColor: colors.main,
  },
  deliveryOptionGap: {
    marginRight: 0,
    marginLeft: 16,
  },
  deliveryOptionText: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.medium,
    color: colors.textDark,
    marginLeft: 8,
  },
  deliveryOptionTextActive: {
    color: colors.white,
  },

  buttonWrapper: {
    paddingHorizontal: 25,
    paddingTop: 20,
    paddingBottom: 15,
    backgroundColor: colors.white,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    marginTop: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.main,
    paddingVertical: 18,
    borderRadius: 14,
    textAlign: 'center',
    flexDirection: 'row',
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: colors.white,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.sm,
    marginLeft: 10,
  },
  messageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  infoBarSection: {
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  infoBar: {
    paddingVertical: 10,
    borderBottomWidth: 2.5,
    borderBottomColor: colors.separatorColor,
  },
  infoBarTitle: {
    color: colors.textSubTitle,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.sm,
  },
  infoBarText: {
    color: colors.textDark,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.sm,
    marginTop: 5,
    height: 30,
    padding: 0,
  },
  buttonItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  buttonItemText: {
    color: colors.textDark,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.sm,
  },
  buttonItemTotal: {
    marginTop: 10,
    borderTopColor: colors.separatorColor,
    borderTopWidth: 0.5,
  },
  infoBarTitleTotal: {
    color: colors.textDark,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.md,
  },
  buttonItemTextTotal: {
    color: colors.textDark,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.md,
  },
});

export default styles;
