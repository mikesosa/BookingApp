import React from 'react';
import { RegisterScreen, LoginScreen, HomeScreen } from './app/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" options={{ title: 'Registro' }} component={RegisterScreen} />
        <Stack.Screen
          name="Home"
          options={{ title: 'Inicio', headerShown: false }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
