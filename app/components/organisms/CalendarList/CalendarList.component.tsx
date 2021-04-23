import React from 'react';
import { CalendarList } from 'react-native-calendars';

export interface ICalendarListProps {}

export function CalendarLong(props: ICalendarListProps) {
  return (
    <CalendarList
      // Callback which gets executed when visible months change in scroll view. Default = undefined
      markedDates={{
        '2021-05-16': { selected: true, marked: true, selectedColor: 'blue' },
        '2021-05-17': { marked: true },
        '2021-05-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
        '2021-05-19': { disabled: true, disableTouchEvent: true },
      }}
      onVisibleMonthsChange={(months) => {
        console.log('now these months are visible', months);
      }}
      // Max amount of months allowed to scroll to the past. Default = 50
      pastScrollRange={50}
      // Max amount of months allowed to scroll to the future. Default = 50
      futureScrollRange={50}
      // Enable or disable scrolling of calendar list
      scrollEnabled={true}
      // Enable or disable vertical scroll indicator. Default = false
      showScrollIndicator={true}
      // ...calendarParams
      onDayPress={(day) => {
        console.log('selected day', day);
      }}
    />
  );
}
