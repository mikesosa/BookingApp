import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CalendarScreen } from '../CalendarScreen/CalendarScreen.component';
import { RegisterScreen } from '..';
import { Icon } from 'native-base';

const Tab = createBottomTabNavigator();

export function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon: any;
          if (route.name === 'Calendar') {
            icon.type = focused ? 'FontAwesome5' : 'FontAwesome';
            icon.name = focused ? 'calendar-week' : 'calendar-o';
          } else if (route.name === 'Register') {
            icon.name = 'person';
          }

          return (
            <Icon type={icon.type} name={icon.name} style={{ fontSize: size, color: color }} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Register" options={{ title: 'Registro' }} component={RegisterScreen} />
    </Tab.Navigator>
  );
}
