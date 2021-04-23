import React, { useEffect, useState } from 'react';
// import { Text } from 'native-base';
import { MainLayout } from '../../../components/templates';
import { Calendar } from 'react-native-calendars';
import { enumerateDaysBetweenDates } from '../../../utils/datesInBetween';

const EDGE_DATES_COLOR = '#50cebb';
const BETWEEN_DATES_COLOR = '#70d7c7';

export function CalendarManageScreen() {
  const [startingDay, setStartingDay] = useState(null as any);
  const [endingDay, setEndingDay] = useState(null as any);
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    if (startingDay) {
      const dates = {
        // '2021-04-23': { color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white' },
        [startingDay.dateString]: { startingDay: true, color: EDGE_DATES_COLOR },
      };
      setMarkedDates(dates);
    }
  }, [startingDay]);

  useEffect(() => {
    if (endingDay) {
      const datesBetween = enumerateDaysBetweenDates(startingDay.dateString, endingDay.dateString);
      let datesBetweenArray = datesBetween.map((date) => {
        return {
          [date]: { color: BETWEEN_DATES_COLOR },
        };
      });
      const datesBetweenObject = Object.assign({}, ...datesBetweenArray);
      const dates = {
        [startingDay.dateString]: { color: EDGE_DATES_COLOR, startingDay: true },
        ...datesBetweenObject,
        [endingDay.dateString]: { color: EDGE_DATES_COLOR, endingDay: true },
      };
      setMarkedDates(dates);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endingDay]);

  return (
    <MainLayout headerTitle="Calendar">
      <Calendar
        // @ts-ignore: Unreachable code error
        dayHeight={40}
        onDayPress={(day) => {
          if (startingDay && endingDay) {
            setEndingDay(null);
            setStartingDay(null);
            setMarkedDates({});
          } else if (startingDay && startingDay.dateString <= day.dateString) {
            setEndingDay(day);
          } else {
            setStartingDay(day);
          }
        }}
        markingType={'period' as any}
        markedDates={markedDates as any}
        enableSwipeMonths={true}
      />
    </MainLayout>
  );
}
