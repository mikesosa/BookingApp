import React from 'react';
import { RegisterScreen, LoginScreen, HomeScreen } from './app/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import customTheme from './native-base-theme/variables/customTheme';

const Stack = createStackNavigator();

export default function App() {
  return (
    <StyleProvider style={getTheme(customTheme as any)}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
          <Stack.Screen
            name="Register"
            options={{ title: 'Registro' }}
            component={RegisterScreen}
          />
          <Stack.Screen
            name="Home"
            options={{ title: 'Inicio', headerShown: false }}
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StyleProvider>
  );
}
