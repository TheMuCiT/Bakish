import {Pressable, StyleSheet, Text, View} from 'react-native';
import colors from '../../../theme/colors';
import fonts from '../../../theme/fonts';

interface ICustomButton {
  onPress: () => void;
  text: string;
  type?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
  bgColor?: string;
  fgColor?: string;
}

const CustomButton = ({
  onPress,
  text,
  type = 'PRIMARY',
  bgColor,
  fgColor,
}: ICustomButton) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 14,
  },

  container_PRIMARY: {
    backgroundColor: colors.main,
  },

  container_SECONDARY: {},
  container_TERTIARY: {},

  text: {
    color: colors.white,
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.semiBold,
  },

  text_PRIMARY: {},

  text_SECONDARY: {},

  text_TERTIARY: {},
});
