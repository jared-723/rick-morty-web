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
    <section className='max-w-screen bg-black flex flex-col items-center pt-[3rem] gap-4 relative z-0'>
      <div className='w-full absolute top-0 left-0 z-10'>
        <img src="/imgSrc/bgTop.png" alt="" />
      </div>
      <main className='w-full flex flex-col items-center pt-[3rem] gap-4 z-20'>
        <LocationForm handleSubmit={handleSubmit}/>
        <LocationInfo currentLocation={currentLocation}/>
        <ResidentList residents = {currentLocation?.residents ?? []} currentLocation={currentLocation}/>
      </main>
      <div className='w-full absolute bottom-0 left-0 z-10'>
        <img src="/imgSrc/bgBottom.png" alt="" />
      </div>    
    </section>
  )
}

export default App
