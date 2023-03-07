import React from 'react'
// import Category1 from './../assets/category1.svg'
import { ReactComponent as Category1 } from './../assets/category1.svg'

function CategoryItem({ business, available }) {
  return (
    <div className='group flex min-h-[198px] flex-col space-y-6 rounded-[20px] bg-white py-[25px] px-12 shadow-custom hover:bg-cornflower-blue hover:text-white'>
      <Category1 className='h-6 w-6 fill-white' alt='statistics' />
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
