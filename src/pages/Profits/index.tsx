import type { Income } from 'models/profits'
import { useEffect, useState } from 'react'
import { getProfits } from 'tools/rate'

export interface ProfitsPageProps {}

// eslint-disable-next-line no-empty-pattern
const ProfitsPage = ({}: ProfitsPageProps) => {
  const [profits, setProfits] = useState<any>()

  const incomes: Income[] = [
    { currency: 'EUR', summ: 400, date: '2020-03-30' },
    { currency: 'USD', summ: 500, date: '2020-02-20' },
    { currency: 'EUR', summ: 458, date: '2020-01-31' },
  ]

  const init = async () => {
    const profit = await getProfits(incomes)
    setProfits(profit)
  }

  useEffect(() => {
    init()
  })

  return <pre>{JSON.stringify(profits, null, 2)}</pre>
}

export default ProfitsPage
