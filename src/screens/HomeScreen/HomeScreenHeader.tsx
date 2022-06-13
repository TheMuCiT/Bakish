import {
  View,
  Text,
  FlatList,
  ScrollView,
  Pressable,
  useWindowDimensions,
} from 'react-native';

//data
import ads from '../../data/ads.json';

import Ads from '../../components/ads/Ads';

import Newest from '../../assets/icons/Newest';
import Recommended from '../../assets/icons/Recommended';

import styles from './styles';
import {useRef, useState} from 'react';
const HomeScreenHeader = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  const viewConfig = useRef({itemVisiblePercentThreshold: 30});

  const width = useWindowDimensions().width;

  const test: number[] = [];

  ads.map((i, index) => {
    test.push((width - 35) * (index + 1));
  });

  return (
    <View style={{flex: 1}}>
      <View>
        <FlatList
          data={ads}
          renderItem={({item}) => item && <Ads ads={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{width: 15}} />}
          snapToOffsets={test}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          contentContainerStyle={{paddingHorizontal: 25}}
          pagingEnabled={true}
        />
      </View>
      {/* HomeScreen Category */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 25}}
        style={{
          marginBottom: 20,
        }}>
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
  );
};

export default HomeScreenHeader;
