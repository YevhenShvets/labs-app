import type { Income } from 'Profits'
import React, { useEffect, useState } from 'react'
import { Calendar } from 'screens/components'
import { CalendarProps } from 'screens/components/Modals/Calendar'
import { getProfits } from 'tools/rate'
import './styles.css'

const App = () => {
  const [type, setType] = useState<CalendarProps['type']>('single')
  const [calendarVisible, setCalendarVisible] = useState<boolean>(false)

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

  const onChange = (type: CalendarProps['type']) => {
    setType(type)
    setCalendarVisible(true)
  }

  return (
    <div className="items-center">
      <div className="flex p-5 border self-center border-green-200 rounded-xl justify-around">
        <button onClick={() => onChange('single')}>
          <p>single</p>
        </button>
        <button onClick={() => onChange('range')}>
          <p>range</p>
        </button>
        <button onClick={() => onChange('multiRange')}>
          <p>multiRange</p>
        </button>
      </div>

      <Calendar
        type={type}
        visible={calendarVisible}
        onClose={() => setCalendarVisible(false)}
      />
    </div>
  )
}

export default App
