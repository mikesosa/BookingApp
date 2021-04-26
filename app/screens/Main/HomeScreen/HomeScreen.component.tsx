import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';
import {
  CalendarScreen,
  ProfileScreen,
  NotificationsScreen,
  EducationScreen,
  StartTestScreen,
} from '../../';

const Tab = createBottomTabNavigator();

export function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon: any = { type: '', name: '' };
          if (route.name === 'Calendar') {
            icon.type = focused ? 'FontAwesome5' : 'FontAwesome';
            icon.name = focused ? 'calendar-week' : 'calendar-o';
          } else if (route.name === 'Education') {
            icon.type = 'FontAwesome';
            icon.name = 'graduation-cap';
          } else if (route.name === 'Notifications') {
            icon.name = focused ? 'md-notifications' : 'md-notifications-outline';
          } else if (route.name === 'Profile') {
            icon.name = focused ? 'person' : 'person-outline';
          } else {
            icon.name = focused ? 'play-circle' : 'play-circle-outline';
          }

          return (
            <Icon
              type={icon.type || undefined}
              name={icon.name}
              style={{ fontSize: size, color: color }}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Calendar" options={{ title: 'Calendario' }} component={CalendarScreen} />
      <Tab.Screen name="Education" options={{ title: 'Escuela' }} component={EducationScreen} />
      <Tab.Screen name="Test" options={{ title: 'Prueba' }} component={StartTestScreen} />
      <Tab.Screen
        name="Notifications"
        options={{ title: 'Notificaciones' }}
        component={NotificationsScreen}
      />
      <Tab.Screen name="Profile" options={{ title: 'Perfil' }} component={ProfileScreen} />
    </Tab.Navigator>
  );
}
