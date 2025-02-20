import { createStackNavigator } from '@react-navigation/stack';
import { Slot } from 'expo-router';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Slot} options={{ headerShown: false }}/>

      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
