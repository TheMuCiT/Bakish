import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  page: {
    overflow: 'visible',
    flex: 1,
    backgroundColor: colors.white,
  },
  //image
  imageContainer: {
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.grey,
  },
  image: {
    width: '70%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  title: {
    paddingHorizontal: 25,
    paddingTop: 10,
  },
  titleText: {
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.lg,
    color: colors.textDark,
  },
  priceContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  price: {
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.lg,
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
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 10,
  },

  stars: {
    color: colors.main,
    paddingRight: 5,
  },

  descriptionContainer: {
    paddingHorizontal: 25,
  },

  description: {
    color: colors.textDark,
    fontFamily: fonts.family.light,
    fontSize: fonts.size.xxs,
  },
  size: {
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  sizeTitle: {
    marginTop: 10,
    marginBottom: 20,
    color: colors.textDark,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.sm,
  },
  sizeSelectorContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  sizeSelector: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.grey,
    borderRadius: 33,
    width: '30%',
    paddingVertical: 10,
  },
  sizeSelectorHighlight: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.textPlaceholder,
    borderRadius: 33,
    width: '30%',
    paddingVertical: 10,
  },
  sizeSelectorText: {
    color: colors.textDark,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.sm,
  },
  sizeSelectorTextHighlight: {
    color: colors.textDark,
    fontFamily: fonts.family.semiBold,
    fontSize: fonts.size.sm,
  },
  buttonContainer: {
    paddingHorizontal: 25,
    marginTop: 10,
    marginBottom: 30,
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
