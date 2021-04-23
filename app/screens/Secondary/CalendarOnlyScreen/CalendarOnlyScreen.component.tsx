import React from 'react';
import { View, Icon, Fab } from 'native-base';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import styles from './CalendarOnlyScreen.style';
import { MainLayout } from '../../../components/templates';

LocaleConfig.locales.es = {
  monthNames: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ],
  monthNamesShort: [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sept',
    'Oct',
    'Nov',
    'Dic',
  ],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sàbado'],
  dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mie.', 'Jue.', 'Vie.', 'Sab.'],
  today: 'Hoy',
};
LocaleConfig.defaultLocale = 'es';

export interface ICalendarOnlyScreenProps {
  navigation: any;
  screenName: string;
}

export function CalendarOnlyScreen({ navigation }: ICalendarOnlyScreenProps) {
  const markedDates = {
    '2021-04-15': { marked: true, dotColor: '#50cebb' },
    '2021-04-16': { marked: true, dotColor: '#50cebb' },
    '2021-04-21': { startingDay: true, color: '#50cebb', textColor: 'white' },
    '2021-04-22': { color: '#70d7c7', textColor: 'white' },
    '2021-04-23': { color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white' },
    '2021-04-24': { color: '#70d7c7', textColor: 'white' },
    '2021-04-25': { endingDay: true, color: '#50cebb', textColor: 'white' },
  };
  console.log('vaaa');
  return (
    <MainLayout headerTitle="Calendar">
      <Calendar
        onDayPress={(day) => {
          console.log('selected day', day);
        }}
        onDayLongPress={(day) => {
          console.log('selected day', day);
        }}
        markingType="period"
        markedDates={markedDates as any}
        enableSwipeMonths={true}
      />
      <View style={styles.fabWrapper}>
        <Fab
          active={false}
          direction="up"
          containerStyle={{}}
          position="bottomRight"
          onPress={() => navigation.navigate('CalendarManage')}
        >
          <Icon type="FontAwesome" name="plus" />
        </Fab>
      </View>
    </MainLayout>
  );
}
