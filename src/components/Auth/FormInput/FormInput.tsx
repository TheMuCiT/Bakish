import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Control, Controller, Path} from 'react-hook-form';
import colors from '../../../theme/colors';
import fonts from '../../../theme/fonts';

interface IFormInput<ContentType> {
  control: any;
  name: Path<ContentType>;
  rules?: {};
  placeholder?: string;
  secureTextEntry?: boolean;
}

function FormInput<ContentType>({
  control,
  name,
  rules = {},
  placeholder = '',
  secureTextEntry = false,
}: IFormInput<ContentType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : '#e8e8e8'},
            ]}>
            <TextInput
              value={value as string}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
              placeholderTextColor="#A3A3A3"
            />
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
}

export default FormInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    paddingHorizontal: 10,
    marginVertical: 5,
    marginTop: 15,
    borderRadius: 8,
  },
  input: {
    height: 50,
    color: colors.textDark,
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.medium,
  },
});
