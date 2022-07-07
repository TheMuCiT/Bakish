import {Auth} from 'aws-amplify';
import {View, Text} from 'react-native';
import CustomButton from '../../components/Auth/CustomButton';

import styles from './styles';

const ProfileScreen = () => {
  const signOutPressed = () => {
    Auth.signOut();
  };
  return (
    <View>
      <CustomButton text="Sign out" onPress={signOutPressed} />
    </View>
  );
};

export default ProfileScreen;
