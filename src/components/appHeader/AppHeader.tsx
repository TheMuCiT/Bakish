import {View, Text, Pressable} from 'react-native';
import GoBackIcon from '../../assets/icons/GoBackIcon';
import Favorite from '../../assets/icons/Favorite';
import styles from './styles';

interface AppHeaderProps {
  goBack: () => void;
  title: string;
  favorite?: boolean;
}

const AppHeader = ({goBack, title, favorite}: AppHeaderProps) => {
  return (
    <View style={styles.header}>
      <Pressable onPress={goBack} style={styles.goBack}>
        <GoBackIcon />
      </Pressable>
      <Text style={styles.product}>{title}</Text>
      <View style={styles.favorite}>{favorite && <Favorite />}</View>
    </View>
  );
};

export default AppHeader;
