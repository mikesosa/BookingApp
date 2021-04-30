import React from 'react';
import { RegisterScreen, LoginScreen, HomeScreen } from './app/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Root, StyleProvider } from 'native-base';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import store, { persistor } from './app/store/store';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import { authSelector } from './app/store/slices/auth';

const Stack = createStackNavigator();

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}

export function App() {
  const { userToken } = useSelector(authSelector);
  return (
    <Root>
      <StyleProvider style={getTheme(material as any)}>
        <NavigationContainer>
          <Stack.Navigator>
            {userToken === null ? (
              <>
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="Login"
                  component={LoginScreen}
                />
                <Stack.Screen
                  name="Register"
                  options={{ title: 'Registro' }}
                  component={RegisterScreen}
                />
              </>
            ) : (
              <Stack.Screen
                name="Home"
                options={{ title: 'Inicio', headerShown: false }}
                component={HomeScreen}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </StyleProvider>
    </Root>
  );
}
