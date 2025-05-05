import React from 'react'
import PropertyCard from './PropertyCard'
import FilterPanel from './FilterPanel'
const PropertyPage = ({properties,setFilters,setLocationID}) => {
  return (
    <div className='flex justify-center items-center mt-[2vw]'>
      <div className='w-[90vw] h-[95vh] flex justify-between border-[1px] p-[1vw]'> 
        <FilterPanel setFilters = {setFilters} setLocationID = {setLocationID} />
        <PropertyCard properties = {properties}/>
      </div>
    </div>
  )
}

export default PropertyPage