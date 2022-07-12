import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import GoBackIcon from '../../../assets/icons/GoBackIcon';
import SignUpSVG from '../../../assets/icons/SignUpSVG';
import Gmail from '../../../assets/icons/Gmail';
import Facebook from '../../../assets/icons/Facebook';
import Apple from '../../../assets/icons/Apple';

import colors from '../../../theme/colors';
import fonts from '../../../theme/fonts';

import {SignUpNavigationProp} from '../../../types/navigation';
import FormInput from '../../../components/Auth/FormInput';
import {useForm} from 'react-hook-form';
import CustomButton from '../../../components/Auth/CustomButton';
import {useState} from 'react';
import {Auth} from 'aws-amplify';
import {CognitoHostedUIIdentityProvider} from '@aws-amplify/auth';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

type SignUpData = {
  username: string;
  email: string;
  password: string;
  passwordRepeat: string;
};

const SignUpScreen = () => {
  const navigation = useNavigation<SignUpNavigationProp>();

  const [loading, setLoading] = useState(false);

  const {control, handleSubmit, watch} = useForm<SignUpData>();
  const pwd = watch('password');

  const onSignUpPressed = async ({username, email, password}: SignUpData) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {email},
      });
      navigation.navigate('Confirm email', {username});
    } catch (e) {
      Alert.alert('oops', (e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  const onSignInFacebook = async () => {
    try {
      await Auth.federatedSignIn({
        provider: CognitoHostedUIIdentityProvider.Facebook,
      });
    } catch (e) {
      Alert.alert('Ops', (e as Error).message);
    }
  };

  const onSignInGoogle = async () => {
    try {
      await Auth.federatedSignIn({
        provider: CognitoHostedUIIdentityProvider.Google,
      });
    } catch (e) {
      Alert.alert('Ops', (e as Error).message);
    }
  };
  const onSignInApple = () => {};
  return (
    <View style={styles.backgroundSVG}>
      <SignUpSVG style={styles.backSVG} />
      <ScrollView style={styles.root}>
        <View style={styles.header}>
          <Pressable onPress={goBack} style={styles.goBack}>
            <GoBackIcon />
          </Pressable>
          <Text style={styles.product}>Create an account</Text>
          <View style={styles.favorite}></View>
        </View>
        <Text style={styles.social}>Continue with socials</Text>
        <View style={styles.links}>
          <Pressable style={styles.linkBox} onPress={onSignInGoogle}>
            <Gmail />
          </Pressable>
          <Pressable style={styles.linkBox} onPress={onSignInFacebook}>
            <Facebook />
          </Pressable>
          <Pressable style={styles.linkBox} onPress={onSignInApple}>
            <Apple />
          </Pressable>
        </View>
        <Text style={styles.or}>Or</Text>
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
            name="email"
            placeholder="Email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
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
          <FormInput
            name="passwordRepeat"
            control={control}
            placeholder="Repeat Password"
            secureTextEntry
            rules={{
              validate: (value: string) =>
                value === pwd || 'Password do not match',
            }}
          />

          <View style={{marginTop: 20}} />

          <CustomButton
            text={loading ? 'Loading...' : 'Create an Account'}
            onPress={handleSubmit(onSignUpPressed)}
          />
          <View style={styles.termsCon}>
            <Text style={styles.terms}>
              By Creating Account you accept term and condition rules
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;

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
  social: {
    textAlign: 'center',
    color: colors.textDark,
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.light,
    marginBottom: 10,
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
  or: {
    width: '100%',
    fontSize: fonts.size.xs,
    color: colors.textDark,
    fontFamily: fonts.family.semiBold,
    textAlign: 'center',
    marginTop: 20,
  },
  form: {
    width: '100%',
    paddingHorizontal: 25,
  },
  termsCon: {
    alignItems: 'center',
  },
  terms: {
    color: colors.textRegister,
    fontSize: fonts.size.xs,
    fontFamily: fonts.family.regular,
    textAlign: 'center',
    maxWidth: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
});
