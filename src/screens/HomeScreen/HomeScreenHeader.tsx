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

interface IHomeScreenHeader {
  onChange: (value: number) => void;
  value: number;
}

const HomeScreenHeader = ({onChange, value}: IHomeScreenHeader) => {
  const [activeCategory, setActiveCategory] = useState(value);

  const viewConfig = useRef({itemVisiblePercentThreshold: 30});

  const width = useWindowDimensions().width;

  const snapOffset: number[] = [];

  const {data, loading, error} = useQuery<ListAdsQuery, ListAdsQueryVariables>(
    listAds,
  );

  data?.listAds?.items.map((i, index) => {
    snapOffset.push((width - 35) * (index + 1));
  });

  const changeCategory = (value: number) => {
    setActiveCategory(value);
    onChange(value);
  };

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
          onPress={() => changeCategory(0)}
          style={
            activeCategory === 0
              ? styles.categoryContainerActive
              : styles.categoryContainer
          }>
          <View style={styles.categoryIcon}>
            <Newest color={activeCategory === 0 ? '#FFA827' : '#999'} />
          </View>
          <Text
            style={
              activeCategory === 0
                ? styles.categoryTextActive
                : styles.categoryText
            }>
            All
          </Text>
        </Pressable>

        <View style={styles.gap} />

        <Pressable
          onPress={() => changeCategory(1)}
          style={
            activeCategory === 1
              ? styles.categoryContainerActive
              : styles.categoryContainer
          }>
          <View style={styles.categoryIcon}>
            <Newest color={activeCategory === 1 ? '#FFA827' : '#999'} />
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
          onPress={() => changeCategory(2)}
          style={
            activeCategory === 2
              ? styles.categoryContainerActive
              : styles.categoryContainer
          }>
          <View style={styles.categoryIcon}>
            <Recommended color={activeCategory === 2 ? '#FFA827' : '#999'} />
          </View>
          <Text
            style={
              activeCategory === 2
                ? styles.categoryTextActive
                : styles.categoryText
            }>
            Favorite
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default HomeScreenHeader;
