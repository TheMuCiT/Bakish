import {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import {DEFAULT_USER_IMAGE} from '../../config';

import user from '../../data/user.json';

import SearchIcon from '../../assets/icons/Search';

//DATA
import ads from '../../data/ads.json';
import products from '../../data/products.json';

import Newest from '../../assets/icons/Newest';
import Recommended from '../../assets/icons/Recommended';

import styles from './styles';
import colors from '../../theme/colors';
import Ads from '../../components/ads/Ads';
import Product from '../../components/product/Product';

const HomeScreen = () => {
  const [searchBarValue, setSearchBarValue] = useState('');
  const [activeCategory, setActiveCategory] = useState(1);

  const viewConfig = useRef({itemVisiblePercentThreshold: 30});

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
      {/* HomeScreen ads */}
      <View style={{}}>
        <FlatList
          data={ads}
          renderItem={({item}) => item && <Ads ads={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 40}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          contentContainerStyle={{paddingHorizontal: 25}}
          pagingEnabled={true}
        />
      </View>
      {/* HomeScreen Category */}
      <View style={{marginBottom: 20}}>
        <ScrollView
          horizontal
          contentContainerStyle={{paddingHorizontal: 25}}
          showsHorizontalScrollIndicator={false}>
          <Pressable
            onPress={() => setActiveCategory(0)}
            style={
              activeCategory === 0
                ? styles.categoryContainerActive
                : styles.categoryContainer
            }>
            <View style={styles.categoryIcon}>
              <Newest />
            </View>
            <Text
              style={
                activeCategory === 0
                  ? styles.categoryTextActive
                  : styles.categoryText
              }>
              Popular
            </Text>
          </Pressable>

          <View style={styles.gap} />

          <Pressable
            onPress={() => setActiveCategory(1)}
            style={
              activeCategory === 1
                ? styles.categoryContainerActive
                : styles.categoryContainer
            }>
            <View style={styles.categoryIcon}>
              <Newest />
            </View>
            <Text
              style={
                activeCategory === 1
                  ? styles.categoryTextActive
                  : styles.categoryText
              }>
              Newest
            </Text>
          </Pressable>

          <View style={styles.gap} />

          <Pressable
            onPress={() => setActiveCategory(2)}
            style={
              activeCategory === 2
                ? styles.categoryContainerActive
                : styles.categoryContainer
            }>
            <View style={styles.categoryIcon}>
              <Recommended />
            </View>
            <Text
              style={
                activeCategory === 2
                  ? styles.categoryTextActive
                  : styles.categoryText
              }>
              Recommended
            </Text>
          </Pressable>
        </ScrollView>
      </View>
      {/* HomeScreen product flatList */}
      <FlatList
        data={products}
        renderItem={({item}) => <Product product={item} />}
        contentContainerStyle={{paddingHorizontal: 25}}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        ItemSeparatorComponent={() => <View style={{height: 19}} />}
      />
    </View>
  );
};

export default HomeScreen;
