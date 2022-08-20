import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import GoBackIcon from '../../../assets/icons/GoBackIcon';
import SignUpSVG from '../../../assets/icons/SignUpSVG';
import PasswordRecovery from '../../../assets/icons/PasswordRecovery';
import CustomButton from '../../../components/Auth/CustomButton';

import FormInput from '../../../components/Auth/FormInput';
import {NewPasswordNavigationProp} from '../../../types/navigation';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {useState} from 'react';
import colors from '../../../theme/colors';
import fonts from '../../../theme/fonts';
import {Auth} from 'aws-amplify';

type NewPasswordType = {
  username: string;
  code: string;
  password: string;
};

const NewPasswordScreen = () => {
  const navigation = useNavigation<NewPasswordNavigationProp>();

  const [loading, setLoading] = useState(false);

  const {control, handleSubmit} = useForm<NewPasswordType>();

  const onNewPasswordPressed = async ({
    username,
    code,
    password,
  }: NewPasswordType) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await Auth.forgotPasswordSubmit(username, code, password);
      navigation.navigate('New password');
    } catch (e) {
      Alert.alert('oops', (e as Error).message);
    } finally {
      setLoading(false);
    }
    navigation.navigate('Sign in');
  };

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.backgroundSVG}>
      <SignUpSVG style={styles.backSVG} />
      <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Pressable onPress={goBack} style={styles.goBack}>
            <GoBackIcon />
          </Pressable>
          <Text style={styles.product}>Password Recovery</Text>
          <View style={styles.favorite}></View>
        </View>
        <Text style={styles.social}>Complete the Verification</Text>
        <View style={styles.form}>
          <View style={styles.icon}>
            <View style={styles.iconContainer}>
              <PasswordRecovery />
            </View>
          </View>
          <Text style={styles.title}>Enter your email for recovery</Text>
          <Text style={styles.subTitle}>
            Protecting your privacy is our top priority. Please confirm account
            by entering the authorization code:
          </Text>

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
            placeholder="Code"
            name="code"
            control={control}
            rules={{required: 'Code is required'}}
          />

          <FormInput
            placeholder="Enter your new password"
            name="password"
            control={control}
            secureTextEntry
            rules={{
              required: 'Password is required',
              minLength: {
                value: 7,
                message: 'Password should be at least 7 characters long',
              },
            }}
          />

          <View style={{marginTop: 20}} />

          <CustomButton
            text={loading ? 'Loading...' : 'Update password'}
            onPress={handleSubmit(onNewPasswordPressed)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default NewPasswordScreen;

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
  form: {
    width: '100%',
    paddingHorizontal: 25,
    marginTop: '20%',
    marginBottom: 40,
  },
  icon: {
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 8,
    shadowColor: colors.shadowColor,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.25,
    elevation: 20,
  },
  title: {
    color: colors.textDark,
    fontSize: fonts.size.md,
    fontFamily: fonts.family.semiBold,
    textAlign: 'center',
    marginBottom: 20,
  },
  subTitle: {
    color: colors.textDark,
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.light,
    textAlign: 'center',
    marginBottom: 20,
  },
});
