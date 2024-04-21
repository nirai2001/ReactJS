import { useState } from 'react';
import Places from './Places.jsx';
import { useEffect } from 'react';
import Error from './Error.jsx'
import sortPlacesByDistance from '../loc.js';
import { fetchAvailablePlaces } from './http.js';
export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching,setIsFetching] = useState(false)
  const [availablePlaces,setAvailablePlaces] = useState([])
  const [error,setError] = useState()
  useEffect(() => {
     async function fetchPlaces(){
      setIsFetching(true)
      try{
        const places = await fetchAvailablePlaces();
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        })
      }
      catch(error){
        setError({message: error.message || 'could not fetch the data Try Again Later!!'})
      }
      setIsFetching(false)
    }
    
    fetchPlaces();
  },[])

  if(error){
    return <Error title="An Error Occured!" message={error.message} />
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="The data is being fetched..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
