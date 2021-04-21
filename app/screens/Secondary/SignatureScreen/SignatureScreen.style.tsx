import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  content: {
    paddingTop: 30,
  },
  preview: {
    width: 335,
    height: 114,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 15,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    padding: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
});
