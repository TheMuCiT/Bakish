import {View} from 'react-native';
import styles from './styles';

interface IDeliveryLine {
  isStepActive: boolean;
}

const CheckoutDeliveryLine = ({isStepActive}: IDeliveryLine) => {
  return <View style={[styles.line, isStepActive && styles.lineActive]}></View>;
};

export default CheckoutDeliveryLine;
