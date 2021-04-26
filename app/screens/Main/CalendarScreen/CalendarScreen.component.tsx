import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CalendarOnlyScreen, CalendarManageScreen, CalendarAgendaScreen } from '../../Secondary';

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
        options={{ headerShown: true, title: 'Administar disponibilidad' }}
        name="CalendarManage"
        component={CalendarManageScreen}
      />
      <CalendarStack.Screen
        options={{ headerShown: true, title: 'Agenda' }}
        name="CalendarAgenda"
        component={CalendarAgendaScreen}
      />
    </CalendarStack.Navigator>
  );
}
