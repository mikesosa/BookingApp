import moment from 'moment';

export const enumerateDaysBetweenDates = (startDate: string, endDate: string) => {
  let date = [];
  while (moment(startDate) < moment(endDate)) {
    startDate = moment(startDate).add(1, 'days').format('YYYY-MM-DD');
    date.push(startDate);
  }
  return date;
};
