import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import SignUpSVG from '../../../assets/icons/SignUpSVG';
import Logo from '../../../assets/icons/Logo';
import Gmail from '../../../assets/icons/Gmail';
import Facebook from '../../../assets/icons/Facebook';
import Apple from '../../../assets/icons/Apple';

import {useForm} from 'react-hook-form';
import React, {useState} from 'react';
import fonts from '../../../theme/fonts';
import colors from '../../../theme/colors';
import FormInput from '../../../components/Auth/FormInput';
import CustomButton from '../../../components/Auth/CustomButton';

import {Auth} from 'aws-amplify';
import {SignInNavigationProp} from '../../../types/navigation';

type SignInData = {
  username: string;
  password: string;
};

const SignInScreen = () => {
  const navigation = useNavigation<SignInNavigationProp>();

  const {control, handleSubmit, reset} = useForm<SignInData>();

  const [loading, setLoading] = useState(false);

  const onSignInPressed = async ({username, password}: SignInData) => {
    if (loading) {
      return;
    }
    setLoading(true);

    try {
      await Auth.signIn(username, password);
    } catch (e) {
      if ((e as Error).name === 'UserNotConfirmedException') {
        navigation.navigate('Confirm email', {});
      }
      Alert.alert('oops', (e as Error).message);
    } finally {
      setLoading(false);
      reset();
    }
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('Forgot password');
  };

  const onSignUpPress = () => {
    navigation.navigate('Sign up');
  };

  return (
    <View style={styles.backgroundSVG}>
      <SignUpSVG style={styles.backSVG} />
      <ScrollView style={styles.root}>
        <View style={styles.header}>
          <Logo />
          <Text style={styles.title}>
            Bakish
            <Text style={styles.titleColor}> .</Text>
          </Text>
          <Text style={styles.subTitle}>Bake It Make It</Text>
        </View>
        <View style={styles.form}>
          <FormInput
            name="username"
            placeholder="Username"
            control={control}
            rules={{
              required: 'Username is required',
              minLength: {
                value: 3,
                message: 'Username should be minimum 3 characters long',
              },
            }}
          />

          <FormInput
            name="password"
            placeholder="Password"
            secureTextEntry
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 3,
                message: 'Password should be minimum 3 characters long',
              },
            }}
          />

          <Text onPress={onForgotPasswordPressed} style={styles.forgotPassword}>
            Forgot Password?
          </Text>

          <CustomButton
            text={loading ? 'Loading...' : 'Login'}
            onPress={handleSubmit(onSignInPressed)}
          />
        </View>
        <Text style={styles.or}>Or</Text>
        <View style={styles.links}>
          <View style={styles.linkBox}>
            <Gmail />
          </View>
          <View style={styles.linkBox}>
            <Facebook />
          </View>
          <View style={styles.linkBox}>
            <Apple />
          </View>
        </View>
        <Text style={styles.register} onPress={onSignUpPress}>
          Not a member? <Text style={styles.registerBold}>Register Now</Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  backgroundSVG: {
    flex: 1,
  },
  backSVG: {
    position: 'absolute',
    zIndex: 1,
  },
  root: {
    flex: 1,
    zIndex: 5,
  },
  header: {
    paddingTop: '30%',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  title: {
    fontSize: fonts.size.md,
    fontFamily: fonts.family.semiBold,
    marginTop: 5,
    color: colors.textDark,
  },
  titleColor: {
    color: colors.main,
  },
  subTitle: {
    fontSize: fonts.size.xs,
    fontFamily: fonts.family.light,
    color: colors.textDark,
  },
  form: {
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 25,
  },
  forgotPassword: {
    width: '100%',
    textAlign: 'right',
    fontSize: fonts.size.xs,
    fontFamily: fonts.family.medium,
    color: colors.textDark,
    marginVertical: 10,
  },
  or: {
    width: '100%',
    fontSize: fonts.size.xs,
    color: colors.textDark,
    fontFamily: fonts.family.semiBold,
    textAlign: 'center',
    marginVertical: 20,
  },
  links: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 25,
  },
  linkBox: {
    backgroundColor: colors.white,
    borderRadius: 8,
    shadowColor: colors.shadowColor,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.25,
    elevation: 20,
    width: 100,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
  register: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: fonts.size.xs,
    fontFamily: fonts.family.medium,
    color: colors.textRegister,
    zIndex: 10,
    marginBottom: 40,
  },
  registerBold: {
    fontFamily: fonts.family.semiBold,
    color: colors.textRegisterBold,
  },
});
