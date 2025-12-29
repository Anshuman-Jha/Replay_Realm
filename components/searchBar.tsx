import { icons } from '@/constants/icons';
import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
interface SearchBarProps {
  onPress?: () => void;
  placeholder: string;
}
const SearchBar = ({ onPress, placeholder }: SearchBarProps) => {
  const [input, setInput] = React.useState('');
  return (
     <View className='flex-row items-center bg-dark-200 rounded-full px-4 py-2 '>
      <Image source={icons.search} className='size-5' resizeMode='contain' tintColor='#ab8bff'/>
      <TextInput 
      onPress = {onPress}
        placeholder={placeholder}
        value={input}
        onChangeText={(text) => { setInput(text); }}
        placeholderTextColor='#ab8bff'
        className='flex-1 ml-2 text-white'
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});