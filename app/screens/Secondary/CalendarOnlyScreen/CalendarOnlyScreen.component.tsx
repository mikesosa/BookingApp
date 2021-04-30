import React, { useState } from 'react';
import { View, Icon, Fab } from 'native-base';
// import moment from 'moment';
import { EDGE_DATES_COLOR } from '../../../utils/constants';
import { Calendar } from 'react-native-calendars';
import styles from './CalendarOnlyScreen.style';
import { MainLayout } from '../../../components/templates';
import { useSelector } from 'react-redux';
import { calendarSelector } from '../../../store/slices/calendar';
import { useEffect } from 'react';
import moment from 'moment';

export interface ICalendarOnlyScreenProps {
  navigation: any;
  screenName: string;
}

const eventDates = ['2021-04-22', '2021-04-05', '2021-04-12'];

export function CalendarOnlyScreen({ navigation }: ICalendarOnlyScreenProps) {
  const { availableDates } = useSelector(calendarSelector);
  const [events, setEvents] = useState({});

  const mergeEvents = () => {
    const today = moment(new Date()).format('yyyy-MM-DD');
    let tempCopy = { ...availableDates };
    eventDates.forEach((date) => {
      tempCopy[`${date}`] = {
        ...tempCopy[`${date}`],
        selected: true,
        marked: true,
        textColor: 'white',
        dotColor: 'white',
      };
    });
    tempCopy[`${today}`] = {
      ...tempCopy[`${today}`],
      textColor: EDGE_DATES_COLOR,
    };
    setEvents(tempCopy);
  };

  useEffect(() => {
    mergeEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [availableDates]);

  return (
    <MainLayout headerTitle="Calendar">
      <Calendar
        // @ts-ignore: Unreachable code error
        dayHeight={70}
        onDayPress={() => {
          navigation.navigate('CalendarAgenda');
        }}
        markingType={'period' as any}
        markedDates={events as any}
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
