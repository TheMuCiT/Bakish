import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import GoBackIcon from '../../../assets/icons/GoBackIcon';
import SignUpSVG from '../../../assets/icons/SignUpSVG';

import colors from '../../../theme/colors';
import fonts from '../../../theme/fonts';

import {SignUpNavigationProp} from '../../../types/navigation';

const SignUpScreen = () => {
  const navigation = useNavigation<SignUpNavigationProp>();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={{flex: 1}}>
      <SignUpSVG style={styles.backSVG} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Pressable onPress={goBack} style={styles.goBack}>
            <GoBackIcon />
          </Pressable>
          <Text style={styles.product}>Create an account</Text>
          <View style={styles.favorite}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  backSVG: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  header: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
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
  },
});
