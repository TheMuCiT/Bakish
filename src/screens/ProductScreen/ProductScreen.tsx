import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';

import GoBackIcon from '../../assets/icons/GoBackIcon';
import Favorite from '../../assets/icons/Favorite';
import Stars from '../../assets/icons/Stars';
import StarsEmpty from '../../assets/icons/StarsEmpty';
import Plus from '../../assets/icons/Plus';
import Minus from '../../assets/icons/Minus';
import AddToCart from '../../assets/icons/AddToCart';
import colors from '../../theme/colors';
import {useMemo, useState} from 'react';
import {ProductNavigatorProp, ProductRouteProp} from '../../types/navigation';
import {useQuery} from '@apollo/client';
import {getProduct, getUser} from './queries';
import {
  GetProductQuery,
  GetProductQueryVariables,
  GetUserQuery,
  GetUserQueryVariables,
  ProductSize,
  User,
} from '../../API';
import {DEFAULT_PRODUCT_IMAGE} from '../../config';
import {useAuthContext} from '../../contexts/AuthContext';

import useCreateBasketService from '../../services/CreateBasketService/CreateBasketService';

const ProductScreen = () => {
  const {userId} = useAuthContext();
  const {onCreateBasket, onAddBasketItem} = useCreateBasketService();
  const route = useRoute<ProductRouteProp>();
  const {productId} = route.params;

  const navigation = useNavigation<ProductNavigatorProp>();

  const {
    data: userDataExtract,
    loading: userLoading,
    error: userError,
  } = useQuery<GetUserQuery, GetUserQueryVariables>(getUser, {
    variables: {id: userId},
  });

  const {data, loading, error} = useQuery<
    GetProductQuery,
    GetProductQueryVariables
  >(getProduct, {variables: {id: productId}});

  const userData = userDataExtract?.getUser;
  let userBasketId = userData?.userBasketId;

  const [qty, setQty] = useState(1);

  const handleQty = (amount: 1 | -1) => {
    if (amount === -1 && qty === 1) {
      return;
    }
    setQty(qty + amount);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const product = data?.getProduct;

  const [selectedItem, setSelectedItem] = useState<ProductSize>();

  const defaultItem = product?.ProductSizes?.items[0];

  const breadSize = product?.ProductSizes?.items || [];

  const handleAddToCard = async () => {
    if (userBasketId === null) {
      //create basket
      if (product && selectedItem && userData) {
        await onCreateBasket(
          product.id,
          qty,
          selectedItem.id,
          userData as User,
        );
      }
    } else {
      if (product && userBasketId && selectedItem) {
        onAddBasketItem(product.id, qty, userBasketId, selectedItem.id);
      } else {
        Alert.alert('Error add new item to the basket');
      }
    }
  };

  useMemo(() => {
    if (data?.getProduct?.ProductSizes?.items[0]) {
      setSelectedItem(data.getProduct.ProductSizes.items[0]);
    }
  }, [data]);

  const handleSizeChange = (item: ProductSize) => {
    setSelectedItem(item);
  };

  if (loading || userLoading) {
    return <ActivityIndicator />;
  }

  if (error || userError) {
    return <Text>{error?.message || userError?.message}</Text>;
  }

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
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product screen Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{uri: product?.image || DEFAULT_PRODUCT_IMAGE}}
            style={styles.image}
          />
        </View>
        {/* Product screen title */}
        <View style={styles.title}>
          <Text style={styles.titleText}>{product?.title}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>
              $ {selectedItem?.price || defaultItem?.price}
            </Text>
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
          <Text style={styles.stars}>{product?.rating.toFixed(1)}</Text>
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
          <Text style={styles.description}>{product?.description}</Text>
        </View>
        {/* Product screen size */}
        {breadSize.length > 0 && (
          <View style={styles.size}>
            <Text style={styles.sizeTitle}>Bread Size</Text>
            <View style={styles.sizeSelectorContainer}>
              {breadSize.map(item => (
                <Pressable
                  key={item?.id}
                  onPress={() => item && handleSizeChange(item)}
                  style={
                    selectedItem?.size === item?.size
                      ? styles.sizeSelectorHighlight
                      : styles.sizeSelector
                  }>
                  <Text
                    style={
                      selectedItem?.size === item?.size
                        ? styles.sizeSelectorTextHighlight
                        : styles.sizeSelectorText
                    }>
                    {item?.size}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        )}

        {/* Product screen button */}
        <View style={styles.buttonContainer}>
          <Pressable onPress={handleAddToCard} style={styles.button}>
            <AddToCart />
            <Text style={styles.buttonText}>Add to cart</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductScreen;
