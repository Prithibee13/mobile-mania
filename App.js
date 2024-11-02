import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home/Home';
import BrandScreen from './Screens/Brands/Brandscreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home'  component={Home}></Stack.Screen>
        <Stack.Screen name='Brands'  component={BrandScreen}></Stack.Screen>
      </Stack.Navigator>
        
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
