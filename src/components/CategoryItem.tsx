import { FC } from 'react'
import SvgIcon from './SvgIcon'

interface CategoryItemProps {
  business: string
  available: number
  iconName: string
}

const CategoryItem: FC<CategoryItemProps> = ({
  business,
  available,
  iconName
}) => {
  // const className = clsx('fill-current w-6 h-6 text-cornflower-blue group-hover:text-white', textColor)

  return (
    <div className='group flex min-h-[198px] flex-col space-y-6 rounded-[20px] bg-white py-[25px] px-12 shadow-custom hover:bg-cornflower-blue hover:text-white'>
      <SvgIcon
        iconName={iconName}
        svgProp={{
          className: 'fill-current w-6 h-6 text-black group-hover:text-white'
        }}
      />
      <h3 className='text-2xl leading-[27px] group-hover:text-white'>
        {business}
      </h3>
      <p className='text-2xl leading-[27px] text-dim-gray group-hover:text-white-smoke'>
        {available} Jobs Available
      </p>
    </div>
  )
}

export default CategoryItem
