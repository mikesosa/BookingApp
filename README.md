# BookingApp

Booking app built in React native
:)

## Important!

In order for everything to work as expected please do this changes in the following files!

```sh
// Change on node_modules/react-native-calendars/src/calendar/day/period/style.js on line 6

const FILLER_HEIGHT = 90;

// Add in line 20
justifyContent: 'center'

```

```sh
// Replace for on node_modules/react-native-calendars/src/agenda/reservation-list/index.js on line 169

const res = this.getReservationsForDay(iterator, props);
if (res) {
 reservations = res;
}
iterator.addDays(1);
```
