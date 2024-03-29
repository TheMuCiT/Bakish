import {View, Text, Image, useWindowDimensions, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Favorite from '../../assets/icons/Favorite';
import Plus from '../../assets/icons/Plus';
import colors from '../../theme/colors';
import styles from './styles';
import {HomePageNavigatorProp} from '../../types/navigation';
import {Product} from '../../API';
import useLikeService from '../../services/ProductLikeService/ProductLikeService';

interface IProduct {
  product: Product;
}

const ProductComponent = ({product}: IProduct) => {
  const navigation = useNavigation<HomePageNavigatorProp>();
  const {width} = useWindowDimensions();

  const {toggleLike, isLiked} = useLikeService(product);

  const goToProduct = () => {
    navigation.navigate('ProductScreen', {productId: product.id});
  };

  const addToFavorite = () => {
    toggleLike();
  };

  return (
    <Pressable
      onPress={goToProduct}
      style={[styles.root, {width: (width - 50) / 2 - 15}]}>
      <Pressable onPress={addToFavorite} style={styles.favorite}>
        <Favorite color={isLiked} />
      </Pressable>
      <View style={styles.add}>
        <Plus color={colors.white} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={{uri: product.image}} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.text}>{product.subTitle || ' '}</Text>
        <Text style={styles.price}>
          $ {product.ProductSizes?.items[0]?.price.toFixed(2)}
        </Text>
      </View>
    </Pressable>
  );
};

export default ProductComponent;
