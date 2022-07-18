import {
  View,
  Text,
  FlatList,
  ScrollView,
  Pressable,
  useWindowDimensions,
  ActivityIndicator,
} from 'react-native';

import AdsComponent from '../../components/ads/AdsComponent';

import Newest from '../../assets/icons/Newest';
import Recommended from '../../assets/icons/Recommended';

import styles from './styles';
import {useRef, useState} from 'react';
import colors from '../../theme/colors';
import {useQuery} from '@apollo/client';
import {listAds} from './queries';
import {ListAdsQuery, ListAdsQueryVariables} from '../../API';
const HomeScreenHeader = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  const viewConfig = useRef({itemVisiblePercentThreshold: 30});

  const width = useWindowDimensions().width;

  const snapOffset: number[] = [];

  const {data, loading, error} = useQuery<ListAdsQuery, ListAdsQueryVariables>(
    listAds,
  );

  data?.listAds?.items.map((i, index) => {
    snapOffset.push((width - 35) * (index + 1));
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <View>
        <FlatList
          data={data?.listAds?.items || []}
          renderItem={({item}) => item && <AdsComponent ads={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{width: 15}} />}
          snapToOffsets={snapOffset}
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
