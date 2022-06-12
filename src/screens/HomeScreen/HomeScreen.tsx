import {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import {DEFAULT_USER_IMAGE} from '../../config';

import user from '../../data/user.json';

import SearchIcon from '../../assets/icons/Search';

//DATA

import products from '../../data/products.json';

import styles from './styles';
import colors from '../../theme/colors';

import Product from '../../components/product/Product';

import HomeScreenHeader from './HomeScreenHeader';

const HomeScreen = () => {
  const [searchBarValue, setSearchBarValue] = useState('');

  const width = useWindowDimensions().width;

  return (
    <View style={styles.page}>
      {/* HomeScreen header */}
      <View style={styles.homepageHeader}>
        <View>
          <Text style={styles.heyName}>Hey, {user.name}</Text>
          <Text style={styles.welcomeBack}>Welcome back!</Text>
        </View>
        <View>
          <Image
            source={{uri: user.image || DEFAULT_USER_IMAGE}}
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
        data={products}
        renderItem={({item}) => <Product product={item} />}
        contentContainerStyle={{paddingHorizontal: 25}}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        ItemSeparatorComponent={() => <View style={{height: 19}} />}
        ListHeaderComponent={() => <HomeScreenHeader />}
      />
    </View>
  );
};

export default HomeScreen;
