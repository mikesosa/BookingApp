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
    '2021-04-20': { textColor: 'lightblue' },
    '2021-04-22': { startingDay: true, color: 'lightblue' },
    '2021-04-04': { startingDay: true, color: 'lightblue', endingDay: true },
    '2021-04-23': { endingDay: true, color: 'lightblue' },
  };

  return (
    <MainLayout headerTitle="Calendar">
      <Calendar
        // @ts-ignore: Unreachable code error
        dayHeight={70}
        onDayPress={() => {
          navigation.navigate('CalendarAgenda');
        }}
        markingType={'period' as any}
        markedDates={markedDates as any}
        enableSwipeMonths={true}
      />
      <View style={styles.fabWrapper}>
        <Fab
          active={false}
          direction="up"
          containerStyle={{}}
          position="bottomRight"
          style={styles.button}
          onPress={() => navigation.navigate('CalendarManage')}
        >
          <Icon type="FontAwesome" name="plus" />
        </Fab>
      </View>
    </MainLayout>
  );
}
