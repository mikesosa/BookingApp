import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CalendarOnlyScreen, CalendarManageScreen } from '../../Secondary';

const CalendarStack = createStackNavigator();

export function CalendarScreen() {
  return (
    <CalendarStack.Navigator>
      <CalendarStack.Screen
        options={{ headerShown: false }}
        name="CalendarOnly"
        component={CalendarOnlyScreen}
      />
      <CalendarStack.Screen
        options={{ headerShown: false }}
        name="CalendarManage"
        component={CalendarManageScreen}
      />
    </CalendarStack.Navigator>
  );
}
