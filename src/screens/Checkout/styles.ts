import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  page: {
    overflow: 'visible',
    flex: 1,
    marginBottom: 30,
  },
  header: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.grey,
  },
  goBack: {
    width: 21,
    aspectRatio: 1,
    backgroundColor: colors.main,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  product: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.semiBold,
    color: colors.textDark,
  },
  favorite: {
    width: 21,
    aspectRatio: 1,
    backgroundColor: colors.grey,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoTitle: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.regular,
    color: colors.textGrey,
  },
  info: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.regular,
    color: colors.textDark,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  total: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.medium,
    color: colors.textDark,
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
  buttonText: {
    color: colors.white,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.sm,
    marginLeft: 10,
  },
});

export default styles;
