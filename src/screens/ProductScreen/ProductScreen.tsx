import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

import GoBackIcon from '../../assets/icons/GoBackIcon';
import Favorite from '../../assets/icons/Favorite';
import Stars from '../../assets/icons/Stars';
import StarsEmpty from '../../assets/icons/StarsEmpty';
import Plus from '../../assets/icons/Plus';
import Minus from '../../assets/icons/Minus';
import AddToCart from '../../assets/icons/AddToCart';
import colors from '../../theme/colors';
import {useState} from 'react';
import {ProductNavigatorProp} from '../../types/navigation';

const ProductScreen = () => {
  const navigation = useNavigation<ProductNavigatorProp>();
  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState(2);

  const handleQty = (amount: 1 | -1) => {
    if (amount === -1 && qty === 1) {
      return;
    }
    setQty(qty + amount);
  };

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.page}>
      {/* Product screen header */}
      <View style={styles.header}>
        <Pressable onPress={goBack} style={styles.goBack}>
          <GoBackIcon />
        </Pressable>
        <Text style={styles.product}>Product</Text>
        <View style={styles.favorite}>
          <Favorite />
        </View>
      </View>
      <ScrollView>
        {/* Product screen Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{uri: 'https://i.postimg.cc/bw2TWcYg/Bread-4.png'}}
            style={styles.image}
          />
        </View>
        {/* Product screen title */}
        <View style={styles.title}>
          <Text style={styles.titleText}>Fresh mom's bread</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>$2.69</Text>
            <View style={styles.noFItemContainer}>
              <Pressable
                onPress={() => handleQty(-1)}
                style={styles.noFItemButton}>
                <Minus />
              </Pressable>
              <Text style={styles.noFItem}>{qty}</Text>
              <Pressable
                onPress={() => handleQty(1)}
                style={styles.noFItemButton}>
                <Plus color={colors.textDark} />
              </Pressable>
            </View>
          </View>
        </View>
        {/* Product screen stars */}
        <View style={styles.starsContainer}>
          <Text style={styles.stars}>4.9</Text>
          <View>
            <Stars />
          </View>
          <View>
            <Stars />
          </View>
          <View>
            <Stars />
          </View>
          <View>
            <Stars />
          </View>
          <View>
            <StarsEmpty />
          </View>
        </View>
        {/* Product screen description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Blush since so in noisy still built up an again. As young ye hopes
            no he place means. Partiality diminution gay yet entreaties
            admiration. In mr it he mention perhaps attempt pointed suppose.
            Unknown ye chamber of warrant of norland arrived.
          </Text>
        </View>
        {/* Product screen size */}
        <View style={styles.size}>
          <Text style={styles.sizeTitle}>Bread Size</Text>
          <View style={styles.sizeSelectorContainer}>
            <Pressable
              onPress={() => setSelectedSize(1)}
              style={
                selectedSize === 1
                  ? styles.sizeSelectorHighlight
                  : styles.sizeSelector
              }>
              <Text
                style={
                  selectedSize === 1
                    ? styles.sizeSelectorTextHighlight
                    : styles.sizeSelectorText
                }>
                250g
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setSelectedSize(2)}
              style={
                selectedSize === 2
                  ? styles.sizeSelectorHighlight
                  : styles.sizeSelector
              }>
              <Text
                style={
                  selectedSize === 2
                    ? styles.sizeSelectorTextHighlight
                    : styles.sizeSelectorText
                }>
                250g
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setSelectedSize(3)}
              style={
                selectedSize === 3
                  ? styles.sizeSelectorHighlight
                  : styles.sizeSelector
              }>
              <Text
                style={
                  selectedSize === 3
                    ? styles.sizeSelectorTextHighlight
                    : styles.sizeSelectorText
                }>
                250g
              </Text>
            </Pressable>
          </View>
        </View>
        {/* Product screen button */}
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <AddToCart />
            <Text style={styles.buttonText}>Add to cart</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductScreen;
