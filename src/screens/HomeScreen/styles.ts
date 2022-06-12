import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  page: {
    paddingVertical: 10,
    overflow: 'visible',
    flex: 1,
    marginBottom: 30,
  },
  homepageHeader: {
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heyName: {
    fontSize: fonts.size.md,
    color: colors.textDark,
    fontFamily: fonts.family.semiBold,
  },
  welcomeBack: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.light,
  },
  avatarImage: {
    width: 38,
    aspectRatio: 1,
    borderRadius: 13,
  },
  avatarDot: {
    position: 'absolute',
    right: -3,
    top: -4,
    width: 11,
    aspectRatio: 1,
    borderRadius: 5,
    backgroundColor: colors.main,
    borderColor: colors.white,
    borderWidth: 1,
  },
  search: {
    marginHorizontal: 25,
    backgroundColor: colors.grey,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 19,
    borderRadius: 8,
  },
  input: {
    marginLeft: 14,
    color: colors.textDark,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.grey,
    borderRadius: 33,
  },
  categoryContainerActive: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.textDark,
    borderRadius: 33,
  },
  categoryIcon: {
    margin: 4,
    width: 31,
    backgroundColor: colors.white,
    aspectRatio: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gap: {
    width: 11,
  },
  categoryText: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    color: colors.textGrey,
    fontFamily: fonts.family.medium,
  },
  categoryTextActive: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    color: colors.white,
    fontFamily: fonts.family.medium,
  },
});
