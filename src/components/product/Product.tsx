import {View, Text, Image, useWindowDimensions} from 'react-native';

import Favorite from '../../assets/icons/Favorite';
import Plus from '../../assets/icons/Plus';
import colors from '../../theme/colors';
import styles from './styles';

const Product = ({product}: any) => {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.root, {width: (width - 50) / 2 - 15}]}>
      <View style={styles.favorite}>
        <Favorite />
      </View>
      <View style={styles.add}>
        <Plus color={colors.white} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={{uri: product.image}} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.text}>{product.subTitle}</Text>
        <Text style={styles.price}>$ {product.price.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default Product;
