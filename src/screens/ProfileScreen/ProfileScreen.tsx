import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import {
  View,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import AppHeader from '../../components/appHeader/AppHeader';
import CustomButton from '../../components/Auth/CustomButton';
import {ProfileNavigatorProp} from '../../types/navigation';

import EditProfile from '../../assets/icons/EditProfile';
import Arrow from '../../assets/icons/Arrow';
import UserIcon from '../../assets/icons/UserIcon';
import FavoritesUser from '../../assets/icons/FavoritesUser';
import Language from '../../assets/icons/Language';
import DarkMode from '../../assets/icons/DarkMode';
import Logout from '../../assets/icons/Logout';
import userIcon from '../../assets/images/userIcon.png';

import styles from './styles';
import {useAuthContext} from '../../contexts/AuthContext';
import {GetUserQuery, GetUserQueryVariables} from '../../API';
import {useQuery} from '@apollo/client';
import {getUser} from './queries';

import dayjs from 'dayjs';

const ProfileScreen = () => {
  const {userId} = useAuthContext();
  const navigation = useNavigation<ProfileNavigatorProp>();

  const {
    data: userDataExtract,
    loading: userLoading,
    error: userError,
  } = useQuery<GetUserQuery, GetUserQueryVariables>(getUser, {
    variables: {id: userId},
  });

  const userData = userDataExtract?.getUser;

  const signOutPressed = () => {
    Auth.signOut();
  };

  const goBack = () => {
    navigation.goBack();
  };

  if (userLoading) {
    return <ActivityIndicator />;
  }

  if (userError) {
    return <Text>{userError.message}</Text>;
  }

  return (
    <View style={styles.page}>
      {/* Profile screen header */}
      <AppHeader goBack={goBack} title={'Profile'} />

      {/* Profile Picture */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.pageContainer}>
        <View style={styles.picture}>
          <View style={styles.pictureLeft}>
            <View style={styles.pictureImage}>
              <Image source={userIcon} />
            </View>
            <View style={styles.pictureText}>
              <Text style={styles.pictureName}>
                {userData?.username || 'User'}
              </Text>
              <Text style={styles.pictureUserSince}>
                User since {dayjs(userData?.createdAt).format('YYYY')}
              </Text>
            </View>
          </View>
          <View>
            <EditProfile />
          </View>
        </View>
        {/* Orders */}
        <View style={styles.orders}>
          <View style={styles.ordersItem}>
            <Text style={styles.ordersItemText}>
              {userData?.Orders?.items.length}
            </Text>
            <Text style={styles.ordersItemSubText}>Purchases</Text>
          </View>
          <View style={[styles.ordersItemMiddle, styles.ordersItem]}>
            <Text style={styles.ordersItemText}>0</Text>
            <Text style={styles.ordersItemSubText}>Favorites</Text>
          </View>
          <View style={styles.ordersItem}>
            <Text style={styles.ordersItemText}>0</Text>
            <Text style={styles.ordersItemSubText}>Deliveries</Text>
          </View>
        </View>
        {/* content */}
        <View style={styles.content}>
          <Text style={styles.title}>CONTENT</Text>
          <View style={styles.contentItem}>
            <View style={styles.contentItemLeft}>
              <UserIcon />
              <Text style={styles.contentText}>Profile Settings</Text>
            </View>
            <View>
              <Arrow />
            </View>
          </View>
          <View style={styles.contentItem}>
            <View style={styles.contentItemLeft}>
              <FavoritesUser />
              <Text style={styles.contentText}>Favorites</Text>
            </View>
            <View>
              <Arrow />
            </View>
          </View>
        </View>
        {/* Preferences */}
        <View style={styles.content}>
          <Text style={styles.title}>PREFERENCES</Text>
          <View style={styles.contentItem}>
            <View style={styles.contentItemLeft}>
              <Language />
              <Text style={styles.contentText}>Language</Text>
            </View>
            <View>
              <Arrow />
            </View>
          </View>
          <View style={styles.contentItem}>
            <View style={styles.contentItemLeft}>
              <DarkMode />
              <Text style={styles.contentText}>Dark Mode</Text>
            </View>
            <View>
              <Arrow />
            </View>
          </View>
          <Pressable onPress={signOutPressed} style={styles.contentItem}>
            <View style={styles.contentItemLeft}>
              <Logout />
              <Text style={styles.contentText}>Logout</Text>
            </View>
            <View>
              <Arrow />
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
