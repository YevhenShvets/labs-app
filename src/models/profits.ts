export type Currency = 'USD' | 'EUR' | 'UAH'

export interface Income {
  currency: Currency
  summ: number
  date: string
}

export interface Profit {
  totalEarned: number
  totalEarnedUAH: number
  tax5percent: number
  rawData: Income[]
}
