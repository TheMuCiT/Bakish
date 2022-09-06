import {useNavigation} from '@react-navigation/native';
import {Pressable, ScrollView, Text, TextInput, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import ComingSoon from '../../components/comingSoon';

import {PaymentNavigatorProp} from '../../types/navigation';

import PickUpIcon from '../../assets/icons/PickUp';
import DeliveryIcon from '../../assets/icons/Delivery';

import styles from './styles';
import colors from '../../theme/colors';
import {useState} from 'react';
import PaymentHeader from '../../components/payment/PaymentHeader';
import AppHeader from '../../components/appHeader/AppHeader';

const PaymentScreen = () => {
  const navigation = useNavigation<PaymentNavigatorProp>();

  const [deliveryOption, setDeliveryOption] = useState(false);

  const goBack = () => {
    navigation.goBack();
  };

  const processNextStep = () => {
    navigation.navigate('PaymentConfirmationScreen');
  };

  return (
    <View style={styles.page}>
      <AppHeader goBack={goBack} title={'Payment'} />

      {/* Delivery Step */}
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <PaymentHeader step={[true, false, false]} />

        {/* Delivery option */}
        <View style={styles.chooseDeliveryOption}>
          <Pressable
            onPress={() => setDeliveryOption(false)}
            style={[
              styles.deliveryOption,
              !deliveryOption && styles.deliveryOptionActive,
            ]}>
            <PickUpIcon color={!deliveryOption ? colors.white : colors.main} />
            <Text
              style={[
                styles.deliveryOptionText,
                !deliveryOption && styles.deliveryOptionTextActive,
              ]}>
              Pick Up
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setDeliveryOption(true)}
            style={[
              styles.deliveryOption,
              styles.deliveryOptionGap,
              deliveryOption && styles.deliveryOptionActive,
            ]}>
            <DeliveryIcon color={deliveryOption ? colors.white : colors.main} />
            <Text
              style={[
                styles.deliveryOptionText,
                deliveryOption && styles.deliveryOptionTextActive,
              ]}>
              Delivery
            </Text>
          </Pressable>
        </View>
        {/* Delivery option Pick Up  */}

        {deliveryOption ? (
          <View style={styles.messageContainer}>
            <ComingSoon />
          </View>
        ) : (
          <View style={styles.infoBarSection}>
            <View style={styles.infoBar}>
              <Text style={styles.infoBarTitle}>Pick Up From</Text>
              <Text style={styles.infoBarText}>
                G. Mazvyo g.21, 31, LT 03412
              </Text>
            </View>
            <View style={styles.infoBar}>
              <Text style={styles.infoBarTitle}>Additional Information</Text>
              <Text style={styles.infoBarText}>Doors near Stop sign</Text>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Proccess Button */}
      <View style={styles.buttonWrapper}>
        <View style={styles.buttonContainer}>
          <Pressable
            onPress={processNextStep}
            style={[styles.button, deliveryOption && styles.buttonDisabled]}
            disabled={deliveryOption}>
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default PaymentScreen;
