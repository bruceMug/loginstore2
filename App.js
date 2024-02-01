import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './navigation/AuthStack';

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack />
      {/* normally I add the <AppStack /> after for the other app logic */}
    </NavigationContainer>
  );
}

