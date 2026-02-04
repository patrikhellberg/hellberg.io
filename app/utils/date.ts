import type { YearMonth } from '~/types'

export const months = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
]

export const dateString = (yearMonth: YearMonth): string => {
  if (yearMonth === 'current') return 'current'
  const { year, month } = yearMonth
  return `${year} ${months[month - 1]}`
}

export const yearsSinceDate = (start: string) => {
  const startDate = new Date(start)
  const currentDate = new Date()
  let yearsSince = currentDate.getFullYear() - startDate.getFullYear()
  if (
    currentDate.getMonth() < startDate.getMonth() ||
    (currentDate.getMonth() === startDate.getMonth() &&
      currentDate.getDate() < startDate.getDate())
  ) {
    yearsSince--
  }

  return yearsSince
}
