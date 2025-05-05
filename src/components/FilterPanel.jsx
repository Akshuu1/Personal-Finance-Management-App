import React,{useState} from 'react'

const FilterPanel = ({setFilters,setLocationID}) => {

  const [location,setLocation] = useState('')
  
  const applyFilters = () =>{
    setFilters({
      minPrice:50000,
      maxPrice:1000000,
      bedsMin:2,
      propertyType:'2'
    })
  }

  const handleLocationSearch = () =>{
    if (location.toLowerCase() === 'dubai'){
      setLocationID('5002')
    }
  }

  return (
    <div className='text-black bg-blue-300/30 w-[30%] rounded-[1vw]'>
      <h2 className='text-xl font-bold mb-4'>Filters</h2>
      <input type="text" placeholder='Enter Location' value={location} onChange={(e)=>setLocation(e.target.value)} />      
      <button onClick={handleLocationSearch}>Set Location</button>
      <button onClick={applyFilters}> Apply Filters</button>
    </div>
  )
}

export default FilterPanel