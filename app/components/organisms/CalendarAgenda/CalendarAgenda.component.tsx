import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Agenda } from 'react-native-calendars';

export interface ICalendarAgendaProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function CalendarAgenda(props: ICalendarAgendaProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [items, setItems] = useState({
    '2021-04-19': [
      {
        name: 'add stone wall',
        height: 95,
        marked: true,
        dotColor: 'red',
      },
      {
        name: 'landscaping',
        height: 120,
      },
    ],
    '2021-04-20': [
      {
        name: 'fix door',
        height: 50,
      },
      {
        name: 'masonary',
        height: 180,
      },
    ],
  });

  const goToDetailScreen = () => {
    Alert.alert('go to job details now');
  };

  const renderItem = (item: any) => {
    console.log(item);
    return (
      <TouchableHighlight
        style={[
          styles.item,
          { height: item.height },
          { backgroundColor: item.dotColor ? item.dotColor : '' },
        ]}
        onPress={goToDetailScreen}
      >
        <Text>{item.name}</Text>
      </TouchableHighlight>
    );
  };

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  const rowHasChanged = (r1: any, r2: any) => {
    return r1.name !== r2.name;
  };

  return (
    <Agenda
      items={items}
      // loadItemsForMonth={this.loadItems}
      selected={'2021-04-19'}
      renderItem={renderItem}
      renderEmptyDate={renderEmptyDate}
      //   renderEmptyDate={() => <View />}
      rowHasChanged={rowHasChanged}
      onDayPress={(day: any) => {
        console.log('day pressed', day);
      }}
      pastScrollRange={1}
      futureScrollRange={1}
      // hideKnob={true}
      theme={{
        // agendaDayTextColor: 'yellow',
        // agendaDayNumColor: 'green',
        // agendaTodayColor: 'red',
        agendaKnobColor: 'blue',
        // indicatorColor: 'red',
        // dotColor: 'red',
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#8FBC8F',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});
