import {View, Text, Image, useWindowDimensions} from 'react-native';
import React from 'react';

import styles from './styles';

interface IAds {
  ads: {id: number; title: string; text: string; image: string};
}

const Ads = ({ads}: IAds) => {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.root, {width: width - 50}]}>
      <View style={styles.rootContainer}>
        <Text style={styles.title}>{ads.title}</Text>
        <Text style={styles.text}>{ads.text}</Text>
        <Image source={{uri: ads.image}} style={styles.image} />
      </View>
    </View>
  );
};

export default Ads;
