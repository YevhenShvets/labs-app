import { StarIcon } from '@heroicons/react/solid'
import { classnames } from 'tools/common'

interface SkillRowProps {
  title: string
  rate: number
  className?: string
}

const SkillRow = ({ title, rate, className }: SkillRowProps) => {
  const solidStarClassName = 'w-5 h-5 fill-dark-yellow stroke-dark-yellow'
  const starClassName = 'w-5 h-5 stroke-ultra-dark-grey fill-transparent'

  return (
    <div className={classnames('flex items-center justify-between', className)}>
      <p className="text-ultra-dark-grey text-lg mr-2">{title}</p>

      <div className="flex">
        <StarIcon className={rate > 0 ? solidStarClassName : starClassName} />
        <StarIcon className={rate > 1 ? solidStarClassName : starClassName} />
        <StarIcon className={rate > 2 ? solidStarClassName : starClassName} />
        <StarIcon className={rate > 3 ? solidStarClassName : starClassName} />
        <StarIcon className={rate > 4 ? solidStarClassName : starClassName} />
      </div>
    </div>
  )
}

export default SkillRow
