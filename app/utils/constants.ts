// Colors
export const EDGE_DATES_COLOR = '#50cebb';
export const BETWEEN_DATES_COLOR = '#70d7c7';
export const AM_DAY_COLOR = '#FEDD9E';
export const PM_DAY_COLOR = '#FEC98F';
export const FULL_DAY_COLOR = '#FFA071';

export const TIME_RANGES = [
  { text: 'En la mañana (AM)', icon: 'partly-sunny-outline', iconColor: AM_DAY_COLOR },
  { text: 'En la tarde (PM)', icon: 'md-cloudy-night-outline', iconColor: PM_DAY_COLOR },
  { text: 'Todo el dia (24h)', icon: 'md-cloudy-sharp', iconColor: FULL_DAY_COLOR },
  { text: 'Cancelar', icon: 'close', iconColor: 'red' },
];

// Calendars locale
export const CALENDAR_LOCALE_CONFIG = {
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
