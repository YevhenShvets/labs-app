import { useState } from 'react'
import { CalendarModal } from 'uikit/organisms'
import type { CalendarProps } from 'uikit/organisms/modals/Calendar'

export interface CalendarPageProps {}

// eslint-disable-next-line no-empty-pattern
const CalendarPage = ({}: CalendarPageProps) => {
  const [type, setType] = useState<CalendarProps['type']>('single')
  const [calendarVisible, setCalendarVisible] = useState<boolean>(false)

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

      <CalendarModal
        type={type}
        visible={calendarVisible}
        onClose={() => setCalendarVisible(false)}
      />
    </div>
  )
}

export default CalendarPage
