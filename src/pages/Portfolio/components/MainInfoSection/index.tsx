import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from '@heroicons/react/outline'
import faker from 'faker'
import { IconText } from 'uikit/atoms'
import { SkillRow } from 'uikit/molecules'

const MainInfoSection = () => {
  return (
    <div className="bg-light-blue flex flex-col grow items-center">
      <div className="bg-yellow w-full h-10 rounded-b-[20px]"></div>

      <img
        className="rounded-full w-48 h-48 my-10"
        src={faker.image.food(200, 200)}
        alt="text."
      />

      <div className="border-b border-ultra-dark-grey self-stretch text-center">
        <h1 className="text-3xl font-bold">Shvets Yevhen</h1>
      </div>

      <div className="ml-5 mt-5 self-start">
        <p className="text-lg font-semibold mb-2">Контактна інформація</p>

        <div className="ml-3">
          <IconText
            Icon={<PhoneIcon className="w-5 h-5" />}
            title="+38 096 909 903"
          />

          <IconText
            Icon={<MailIcon className="w-5 h-5" />}
            title="shvets@gmail.com"
            className="my-2"
          />

          <IconText
            Icon={<LocationMarkerIcon className="w-5 h-5" />}
            title="м. Чернівці, вул. Головна, 1а"
          />
        </div>
      </div>

      <div className="ml-5 self-start mt-10">
        <p className="text-lg font-semibold mb-2">Навички</p>

        <div className="ml-3">
          <SkillRow title="Презентація" rate={4} />
          <SkillRow title="Комунікація" rate={5} />
          <SkillRow title="Організація" rate={5} />
        </div>
      </div>
    </div>
  )
}

export default MainInfoSection
