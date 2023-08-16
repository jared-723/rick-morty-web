import { useState, useEffect } from 'react'
import './App.css'
import { getRandomDimension } from './utils/random'
import LocationForm from './components/LocationForm'
import LocationInfo from './components/LocationInfo'
import ResidentList from './components/ResidentList'
import axios from 'axios'

function App() {
  const [currentLocation, setCurrentLocation] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.newLocation.value
    fetchDimension(newLocation)
  }

  const fetchDimension = (url) => {

    const URL = `https://rickandmortyapi.com/api/location/${url}`;

    axios
      .get(URL)
      .then(({data}) => setCurrentLocation(data))
      .catch((err) => console.log(err))

  }

  useEffect(() => {

    const randomDimension = getRandomDimension(126)
    fetchDimension(randomDimension)

  }, [])

  return (
    <section className='bg-[url(/imgSrc/bg.png)] max-w-screen bg-contain bg-center flex flex-col items-center pt-[3rem] gap-4'>
        <LocationForm handleSubmit={handleSubmit}/>
        <LocationInfo currentLocation={currentLocation}/>
        <ResidentList residents = {currentLocation?.residents ?? []} currentLocation={currentLocation}/>    
    </section>
  )
}

export default App
