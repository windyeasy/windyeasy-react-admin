import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

export function utcFormat(utcString: string, format = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs.utc(utcString).utcOffset(8).format(format)
}
export function formatTime(time: string | Date | number, fmt = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(time).format(fmt)
}

export function formatShowNumber(number: number): string {
  return number.toLocaleString('en-US')
}
