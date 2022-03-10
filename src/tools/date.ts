import { format, parseISO } from 'date-fns'
export {
  differenceInCalendarDays,
  format,
  isAfter,
  isBefore,
  isDate,
  parseISO,
  subDays,
} from 'date-fns'

export const dateFormatter = {
  date: (date: string, divider = '.') =>
    format(parseISO(date), `dd${divider}MM${divider}yyyy`),
  shortDate: (date: string, divider = '.') =>
    format(parseISO(date), `dd${divider}MM`),
  fullDate: (date: string, divider = '/') =>
    format(parseISO(date), `HH:mm:ss dd${divider}MM${divider}yyyy`),
  month: (date: string, divider = '.') =>
    format(parseISO(date), `dd${divider}MM${divider}yy`),
  time: (date: string) => format(parseISO(date), 'HH:mm'),
}

export const getTimestamp = () => new Date().toISOString()
