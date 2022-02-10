declare module 'Profits' {
  type Currency = 'USD' | 'EUR' | 'UAH'

  interface Income {
    currency: Currency
    summ: number
    date: string
  }

  interface Profit {
    totalEarned: number
    totalEarnedUAH: number
    tax5percent: number
    rawData: Income[]
  }
}
