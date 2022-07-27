import {View, Text} from 'react-native';
import CheckoutDeliveryLine from './PaymentDeliveryLine';
import styles from './styles';

interface IPaymentHeader {
  step: boolean[];
}

const PaymentHeader = ({step}: IPaymentHeader) => {
  return (
    <View style={styles.delivery}>
      <Text style={styles.deliveryTitle}>Delivery</Text>
      <Text style={styles.deliverySubTitle}>
        Add your credit card to pay for your goods
      </Text>
      <View style={styles.deliveryStepContainer}>
        {step.map((i, index) => (
          <CheckoutDeliveryLine isStepActive={i} key={index} />
        ))}
      </View>
    </View>
  );
};

export default PaymentHeader;
