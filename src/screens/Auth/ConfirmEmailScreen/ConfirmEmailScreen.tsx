import {useState} from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

import GoBackIcon from '../../../assets/icons/GoBackIcon';
import SignUpSVG from '../../../assets/icons/SignUpSVG';
import Verification from '../../../assets/icons/Verification';

import CustomButton from '../../../components/Auth/CustomButton';

import {
  ConfirmEmailNavigationProp,
  ConfirmUsernameRouteProp,
} from '../../../types/navigation';

import colors from '../../../theme/colors';
import fonts from '../../../theme/fonts';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {Auth} from 'aws-amplify';
import FormInput from '../../../components/Auth/FormInput';

type ConfirmEmailData = {
  username: string;
  code: string;
};

const ConfirmEmailScreen = () => {
  const route = useRoute<ConfirmUsernameRouteProp>();
  const navigation = useNavigation<ConfirmEmailNavigationProp>();

  const [loading, setLoading] = useState(false);

  const {control, handleSubmit, watch} = useForm<ConfirmEmailData>({
    defaultValues: {username: route.params.username},
  });

  const username = watch('username');

  const onConfirmEmailPressed = async ({username}: ConfirmEmailData) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await Auth.confirmSignUp(username, value);
      navigation.navigate('Sign in');
    } catch (e) {
      Alert.alert('oops', (e as Error).message);
    } finally {
      setLoading(false);
    }
  };
  const onResendPress = async () => {
    try {
      await Auth.resendSignUp(username);
      Alert.alert('Check your email', 'The code has been sent');
    } catch (e) {
      Alert.alert('oops', (e as Error).message);
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  //codeField
  const [value, setValue] = useState('');

  const ref = useBlurOnFulfill({value, cellCount: 6});

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <View style={styles.backgroundSVG}>
      <SignUpSVG style={styles.backSVG} />
      <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Pressable onPress={goBack} style={styles.goBack}>
            <GoBackIcon />
          </Pressable>
          <Text style={styles.product}>Verification</Text>
          <View style={styles.favorite}></View>
        </View>
        <Text style={styles.social}>Complete the Verification</Text>
        <View style={styles.form}>
          <View style={styles.icon}>
            <View style={styles.iconContainer}>
              <Verification />
            </View>
          </View>
          <Text style={styles.title}>Authenticate Your Account</Text>
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

          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={6}
            rootStyle={styles.codeFiledRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />

          <View style={{marginTop: 20}} />

          <CustomButton
            text={loading ? 'Loading...' : 'Verify account'}
            onPress={handleSubmit(onConfirmEmailPressed)}
          />
          <Text style={styles.resend} onPress={onResendPress}>
            Haven’t received the code?{' '}
            <Text style={styles.resendBold}>Resend code</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ConfirmEmailScreen;

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
  resend: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: fonts.size.xs,
    fontFamily: fonts.family.medium,
    color: colors.textRegister,
    zIndex: 10,
    marginBottom: 40,
  },
  resendBold: {
    fontFamily: fonts.family.semiBold,
    color: colors.textRegisterBold,
  },

  codeFiledRoot: {
    marginTop: 20,
  },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 38,
    fontSize: fonts.size.md,
    fontFamily: fonts.family.semiBold,
    color: colors.textDark,
    backgroundColor: colors.white,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 8,
    shadowColor: colors.shadowColor,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.25,
    elevation: 20,
  },
  focusCell: {
    borderColor: 'red',
  },
});
