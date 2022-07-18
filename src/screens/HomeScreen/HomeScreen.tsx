import {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useQuery} from '@apollo/client';

import {DEFAULT_USER_IMAGE} from '../../config';

import SearchIcon from '../../assets/icons/Search';

//DATA

import styles from './styles';
import colors from '../../theme/colors';

import ProductComponent from '../../components/product/ProductComponent';

import HomeScreenHeader from './HomeScreenHeader';
import {getUser, listProducts} from './queries';
import {
  GetUserQuery,
  GetUserQueryVariables,
  ListProductsQuery,
  ListProductsQueryVariables,
} from '../../API';
import {useAuthContext} from '../../contexts/AuthContext';

const HomeScreen = () => {
  const {userId} = useAuthContext();
  const [searchBarValue, setSearchBarValue] = useState('');
  const {
    data: userDataExtract,
    loading: userLoading,
    error: userError,
  } = useQuery<GetUserQuery, GetUserQueryVariables>(getUser, {
    variables: {id: userId},
  });

  const userData = userDataExtract?.getUser;

  const {
    data: productData,
    loading,
    error,
  } = useQuery<ListProductsQuery, ListProductsQueryVariables>(listProducts);

  if (loading || userLoading) {
    return <ActivityIndicator />;
  }

  if (error || userError) {
    return <Text>{error?.message || userError?.message}</Text>;
  }

  return (
    <View style={styles.page}>
      {/* HomeScreen header */}
      <View style={styles.homepageHeader}>
        <View>
          <Text style={styles.heyName}>
            Hey, {userData?.username || 'Guess'}
          </Text>
          <Text style={styles.welcomeBack}>Welcome back!</Text>
        </View>
        <View>
          <Image
            source={{uri: userData?.image || DEFAULT_USER_IMAGE}}
            style={styles.avatarImage}
          />
          <View style={styles.avatarDot} />
        </View>
      </View>
      {/* HomeScreen search bar */}
      <View style={styles.search}>
        <SearchIcon />
        <TextInput
          value={searchBarValue}
          onChangeText={setSearchBarValue}
          placeholder="Search"
          style={styles.input}
          placeholderTextColor={colors.textPlaceholder}
        />
      </View>
      {/* HomeScreen product flatList */}
      <FlatList
        data={productData?.listProducts?.items || []}
        renderItem={({item}) => item && <ProductComponent product={item} />}
        contentContainerStyle={{paddingHorizontal: 0}}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingHorizontal: 25,
        }}
        ItemSeparatorComponent={() => <View style={{height: 19}} />}
        ListHeaderComponent={() => <HomeScreenHeader />}
      />
    </View>
  );
};

export default HomeScreen;
