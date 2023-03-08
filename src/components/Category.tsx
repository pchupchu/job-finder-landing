import CategoryItem from './CategoryItem'

const arr = [
  {
    id: 1,
    business: 'Business Development',
    available: 1069,
    iconName:'category1'
  },
  {
    id: 2,
    business: 'Customer Support',
    available: 1069,
    iconName:'category2'
  },
  {
    id: 3,
    business: 'Marketing & Communication',
    available: 1069,
    iconName:'category3'
  },
  {
    id: 4,
    business: 'Sport  & Media',
    available: 1069,
    iconName:'category4'
  },
  {
    id: 5,
    business: 'Design & Development',
    available: 1069,
    iconName:'category5'
  },
  {
    id: 6,
    business: 'Business  & Consulting',
    available: 1069,
    iconName:'category6'
  },
  {
    id: 7,
    business: 'Human Resources',
    available: 1069,
    iconName:'category7'
  },
  {
    id: 8,
    business: 'IT & Software Development',
    available: 1069,
    iconName:'category8'
  }
]

function Category() {
  return (
    <div className='mx-auto bg-white py-16 px-6'>
      <h2 className='text-center text-[40px] font-bold'>
        Find Your Jobs By <span className='text-slate-blue'>Category</span>
      </h2>
      <div className='mx-auto grid max-w-[1260px] grid-cols-fluid gap-y-6 px-12 py-16 sm:gap-x-6 md:gap-y-9 lg:gap-y-12'>
        {arr.map(item => {
          return (
            <CategoryItem
              key={item.id}
              business={item.business}
              available={item.available}
              iconName={item.iconName}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Category
