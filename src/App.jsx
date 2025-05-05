import React,{useState,useEffect} from 'react'
import { fetchProperties } from './api/propertyAPI';
import Header from "./components/Header";
import PropertyPage from "./components/PropertyPage";
const App = () =>{
  const [properties,setProperties] = useState([])
  const [filters,setFilters] = useState({})
  const [locationID,setLocationID] = useState('5002')

  useEffect(()=>{
    async function loadProperties(){
      const data = await fetchProperties(locationID,filters)
      setProperties(data);
    }
    loadProperties();
  },[filters,locationID]);

  return(
    <div>
      <PropertyPage properties = {properties} setFilters = {setFilters} setLocationID = {setLocationID} />
    </div>
  )
}
export default App;
