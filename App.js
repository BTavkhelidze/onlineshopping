import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import BottomTab from './navigation/BottomTab';


export default function App() {
  return (
    <View style={s.container}>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
})


