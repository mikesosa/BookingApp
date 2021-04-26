import React, { useEffect, useState } from 'react';
import { MainLayout } from '../../../components/templates';
import { Calendar } from 'react-native-calendars';
import { enumerateDaysBetweenDates } from '../../../utils/datesInBetween';
import { ActionSheet, Button, Text } from 'native-base';
import { Alert } from 'react-native';

const EDGE_DATES_COLOR = '#50cebb';
const BETWEEN_DATES_COLOR = '#70d7c7';
const AM_DAY_COLOR = 'gold';
const PM_DAY_COLOR = 'goldenrod';
const FULL_DAY_COLOR = 'chartreuse';

const TIME_RANGES = [
  { text: 'En la mañana (AM)', icon: 'partly-sunny-outline', iconColor: 'tomato' },
  { text: 'En la tarde (PM)', icon: 'md-cloudy-night-outline', iconColor: 'tomato' },
  { text: 'Todo el dia (24h)', icon: 'md-cloudy-sharp', iconColor: 'tomato' },
  { text: 'Cancelar', icon: 'close', iconColor: 'red' },
];

interface ICalendarDate {
  color: string;
  startingDay?: boolean;
  endingDay?: boolean;
  saved?: boolean;
  rangeId?: string;
}

interface IMarkedDates {
  [key: string]: ICalendarDate;
}

export function CalendarManageScreen() {
  const [ranges, setRanges] = useState<IMarkedDates>({});
  const [startingDay, setStartingDay] = useState(null as any);
  const [endingDay, setEndingDay] = useState(null as any);
  const [markedDates, setMarkedDates] = useState<IMarkedDates>();

  const handlePressDay = (day: any) => {
    // Fist check if this is a preselected date
    if (day.dateString in ranges) {
      const { rangeId } = ranges[day.dateString];
      Alert.alert('Atenciòn', '¿Deseas editar este rango de fechas?', [
        {
          text: 'Editar horario',
          onPress: () => {
            //Find startDate, dates in between, and endDate
            for (let key in ranges) {
              if (ranges[key].rangeId === rangeId) {
                console.log('found', key);
              }
            }
            // markedDates
            // showTimeOptions()
          },
        },
        {
          text: 'Volver',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Eliminar', onPress: () => console.log('OK Pressed') },
      ]);
    } else {
      if (startingDay && endingDay) {
        clearState();
      } else if (startingDay && startingDay.dateString <= day.dateString) {
        setEndingDay(day);
      } else {
        setStartingDay(day);
      }
    }
  };

  const clearState = () => {
    setEndingDay(null);
    setStartingDay(null);
    setMarkedDates(ranges);
  };

  const changeRangeColor = (color: string) => {
    const copyMarkedDates = { ...markedDates };
    clearState();
    for (let key in copyMarkedDates) {
      if (!copyMarkedDates[key].saved) {
        copyMarkedDates[key].color = color;
        copyMarkedDates[key].saved = true;
      }
    }
    console.log(copyMarkedDates);
    setRanges({ ...ranges, ...copyMarkedDates });
  };

  const handleSelectedTimeRange = (index: number) => {
    switch (index) {
      case 0:
        changeRangeColor(AM_DAY_COLOR);
        break;
      case 1:
        changeRangeColor(PM_DAY_COLOR);
        break;
      case 2:
        changeRangeColor(FULL_DAY_COLOR);
        break;
      default:
        clearState();
        break;
    }
  };

  useEffect(() => {
    setMarkedDates(ranges);
  }, [ranges]);

  const showTimeOptions = () => {
    ActionSheet.show(
      {
        options: TIME_RANGES,
        cancelButtonIndex: 3,
        title: '¿En que horario estaras disponible?',
      },
      (buttonIndex) => handleSelectedTimeRange(buttonIndex),
    );
  };

  useEffect(() => {
    if (startingDay) {
      const dates = {
        // '2021-04-23': { color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white' },
        [startingDay.dateString]: { startingDay: true, color: EDGE_DATES_COLOR },
      };
      setMarkedDates({ ...dates, ...ranges });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startingDay]);

  useEffect(() => {
    if (endingDay) {
      const datesBetween = enumerateDaysBetweenDates(startingDay.dateString, endingDay.dateString);
      let datesBetweenArray = datesBetween.map((date) => {
        return {
          [date]: { color: BETWEEN_DATES_COLOR, rangeId: startingDay.timestamp },
        };
      });
      const datesBetweenObject = Object.assign({}, ...datesBetweenArray);
      const dates = {
        [startingDay.dateString]: {
          color: EDGE_DATES_COLOR,
          startingDay: true,
          rangeId: startingDay.timestamp,
        },
        ...datesBetweenObject,
        [endingDay.dateString]: {
          color: EDGE_DATES_COLOR,
          endingDay: true,
          rangeId: startingDay.timestamp,
        },
      };
      setMarkedDates({ ...dates, ...ranges });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endingDay]);

  return (
    <MainLayout headerTitle="Calendar">
      <Calendar
        // @ts-ignore: Unreachable code error
        dayHeight={40}
        onDayPress={(day) => handlePressDay(day)}
        markingType={'period' as any}
        markedDates={markedDates as any}
        enableSwipeMonths={true}
      />

      <Button block onPress={() => showTimeOptions()}>
        <Text>Primary</Text>
      </Button>
    </MainLayout>
  );
}
