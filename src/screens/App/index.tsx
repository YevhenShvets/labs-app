import type { Income } from 'Profits'
import React, { useEffect } from 'react'
import { getProfits } from 'tools/rate'
import './styles.css'

const App = () => {
  const incomes: Income[] = [
    { currency: 'EUR', summ: 400, date: '2020-03-30' },
    { currency: 'USD', summ: 500, date: '2020-02-20' },
    { currency: 'EUR', summ: 458, date: '2020-01-31' },
  ]

  const init = async () => {
    const profit = await getProfits(incomes)

    console.log(profit)
  }

  useEffect(() => {
    init()
  }, [])

  return <div></div>
}

export default App
