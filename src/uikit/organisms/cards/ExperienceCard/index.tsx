import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import React from 'react'
import { dateFormatter } from 'tools/date'

interface ExperienceCardProps {
  title: string
  startDate: string
  endDate?: string
  description: string
}

const ExperienceCard = ({
  title,
  startDate,
  endDate,
  description,
}: ExperienceCardProps) => {
  return (
    <div className="rounded-3xl flex-col border-2 border-teal-500 p-2.5 shadow-md flex items-center">
      <div className="border-b border-ultra-dark-grey self-stretch text-center mb-3">
        <p className="">{title}</p>
      </div>

      <div className="flex items-center">
        <p>{dateFormatter.shortDate(startDate)}</p>
        <ArrowNarrowRightIcon className="w-10 h-5 stroke-ultra-dark-grey" />
        <p>{endDate ? dateFormatter.shortDate(endDate) : '(now)'}</p>
      </div>

      <p className="text-base italic mt-3">{description}</p>
    </div>
  )
}

export default ExperienceCard
