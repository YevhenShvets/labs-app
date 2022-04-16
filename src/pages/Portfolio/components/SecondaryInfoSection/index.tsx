import React from 'react'
import { IconText } from 'uikit/atoms'
import { ExperienceCard } from 'uikit/organisms'

const SecondaryInfoSection = () => {
  return (
    <div>
      <div className="border ml-5 border-ultra-dark-grey flex rounded-lg rounded-tl-[100px] p-5 m-5">
        <p className="ml-10 text-right">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum.
        </p>
      </div>

      <div className="ml-5">
        <p className="text-4xl text-ultra-dark-grey font-bold mb-5">
          Досвід роботи
        </p>

        <div className="grid grid-cols-3 gap-10 mr-[100px] ml-5">
          <ExperienceCard
            title="Компанія 1"
            startDate={new Date().toISOString()}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, praesentium."
          />
          <ExperienceCard
            title="Компанія 1"
            startDate={new Date().toISOString()}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, praesentium."
          />
          <ExperienceCard
            title="Компанія 1"
            startDate={new Date().toISOString()}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, praesentium."
          />
        </div>
      </div>

      <div className="mt-10 ml-5">
        <p className="text-4xl text-ultra-dark-grey font-bold mb-5">Освіта</p>

        <div className="flex flex-col ml-5">
          <IconText
            Icon={<p>👉</p>}
            title="Лівинецька ЗОШ"
            titleClassName="font-semibold"
          />

          <IconText
            Icon={<p>👉</p>}
            title="Чернівецький політехнічний коледж"
            titleClassName="font-semibold"
            className="my-1"
          />

          <IconText
            Icon={<p>👉</p>}
            title="Чернівецький національний університет"
            titleClassName="font-semibold"
          />
        </div>
      </div>
    </div>
  )
}

export default SecondaryInfoSection
