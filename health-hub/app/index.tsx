import {  StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { ActivityIndicator } from 'react-native-paper';
import { router } from 'expo-router';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color='white' size={30}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
