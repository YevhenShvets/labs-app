import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XIcon,
} from '@heroicons/react/outline'
import React, { useState } from 'react'
import { classnames, range } from 'tools/common'
import type { BaseModalProps } from '../components'
import { BaseModal } from '../components'

export interface DateRange {
  start: number
  end: number
}

export interface CalendarProps extends BaseModalProps {
  type?: 'single' | 'range' | 'multiRange'
}

const Calendar = ({
  type = 'single',
  visible,
  onClose: onBaseClose,
}: CalendarProps) => {
  const [dateRange, setDateRange] = useState<DateRange[]>([])

  const onClick = (index: number) => {
    if (type === 'single') {
      setDateRange([{ start: index, end: -1 }])
      return
    }

    if (dateRange.length > 0) {
      const activeRange = dateRange[dateRange.length - 1]

      if (activeRange.end > -1) {
        if (type === 'range') {
          setDateRange([{ start: index, end: -1 }])
          return
        }

        setDateRange([...dateRange, { start: index, end: -1 }])
        return
      }

      if (activeRange.start) {
        setDateRange([
          ...dateRange.slice(0, -1),
          { ...activeRange, end: index },
        ])
        return
      }

      setDateRange([...dateRange.slice(0, -1), { start: index, end: -1 }])
      return
    }

    setDateRange([{ start: index, end: -1 }])
  }

  const onClickApply = () => {
    console.log('ON CLICK')
    setDateRange([])
  }

  const onClose = () => {
    onBaseClose()
    setDateRange([])
  }

  const isStart = (index: number) =>
    dateRange.some(range => range.start === index)

  const isEnd = (index: number) => dateRange.some(range => range.end === index)

  const inRange = (index: number) =>
    dateRange.some(range => range.start < index && range.end > index)

  const data = range(35).map(n => ({
    key: n,
    date: n >= 30 ? n - 29 : n + 1,
    otherMonth: n >= 30,
  }))

  return (
    <BaseModal
      {...{ visible, onClose }}
      modalClassName="max-h-[90vh]"
      className="w-auto min-w-[40vw] rounded-xl"
    >
      <div className="bg-white rounded-xl shadow-2xl">
        <div className="flex items-center p-3 border-b border-b-stone-700 justify-end">
          <button onClick={onClose} className="px-5">
            <XIcon className="w-6 h-6 stroke-2 stroke-stone-700" />
          </button>
        </div>

        <div className="p-4 flex items-center justify-center">
          <ChevronLeftIcon className="w-5 h-5 stroke-[6px] stroke-cyan-400" />
          <p className="px-3 font-medium text-2xl">September 2333</p>
          <ChevronRightIcon className="w-5 h-5 stroke-[6px] stroke-cyan-400" />
        </div>

        <div className="flex flex-col justify-center">
          <div className="grid grid-cols-7 text-center">
            <p className="text-gray-500 font-bold text-lg">MON</p>
            <p className="text-gray-500 font-bold text-lg">TUE</p>
            <p className="text-gray-500 font-bold text-lg">WED</p>
            <p className="text-gray-500 font-bold text-lg">THU</p>
            <p className="text-gray-500 font-bold text-lg">FRI</p>
            <p className="text-gray-500 font-bold text-lg">SAT</p>
            <p className="text-gray-500 font-bold text-lg">SUN</p>
          </div>

          <div className="grid grid-cols-7 text-center">
            {data.map(({ key, date, otherMonth }) => (
              <button onClick={() => onClick(key)}>
                <div
                  key={key}
                  className={classnames(
                    'px-3 py-1 my-1 text-center text-gray-700',
                    {
                      'text-gray-300': otherMonth,
                      'bg-blue-500 text-white rounded-l-lg': isStart(key),
                      'bg-blue-500 text-white rounded-r-lg': isEnd(key),
                      'bg-blue-100': inRange(key),
                      'bg-blue-500 text-white rounded-lg':
                        isStart(key) && type === 'single',
                    },
                  )}
                >
                  <p className="font-medium text-lg">{date}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="border-y border-gray-100 flex justify-around p-3 mt-3">
            <p className="text-blue-300 font-medium text-xl">LAST WEEK</p>
            <p className="text-blue-300 font-medium text-xl">LAST MONTH</p>
            <p className="text-blue-300 font-medium text-xl">LAST QUARTER</p>
          </div>

          <div className="p-8 flex justify-center">
            <button
              onClick={onClickApply}
              className="py-5 px-20 hover:shadow-sm border border-gray-100 text-blue-600 shadow-md font-bold text-2xl rounded-xl"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </BaseModal>
  )
}

export default Calendar
