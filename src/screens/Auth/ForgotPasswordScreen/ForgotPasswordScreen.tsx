import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';

import GoBackIcon from '../../../assets/icons/GoBackIcon';
import SignUpSVG from '../../../assets/icons/SignUpSVG';
import PasswordRecovery from '../../../assets/icons/PasswordRecovery';
import CustomButton from '../../../components/Auth/CustomButton';

import colors from '../../../theme/colors';
import fonts from '../../../theme/fonts';

import {ForgotPasswordNavigationProp} from '../../../types/navigation';
import FormInput from '../../../components/Auth/FormInput';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

type ForgotPasswordData = {
  email: string;
};

const ForgotPasswordScreen = () => {
  const navigation = useNavigation<ForgotPasswordNavigationProp>();

  const [loading, setLoading] = useState(false);

  const {control, handleSubmit, watch} = useForm<ForgotPasswordData>();

  const onPasswordRecoveryPressed = () => {};

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.backgroundSVG}>
      <SignUpSVG style={styles.backSVG} />
      <ScrollView style={styles.root}>
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
            name="email"
            placeholder="Enter email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
            }}
          />

          <View style={{marginTop: 20}} />

          <CustomButton
            text={loading ? 'Loading...' : 'Send password recovery'}
            onPress={handleSubmit(onPasswordRecoveryPressed)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ForgotPasswordScreen;

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
