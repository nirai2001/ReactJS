import Error from "./Error";

export async function fetchAvailablePlaces(){
    const res = await fetch('http://localhost:3000/places');
    const resData = await res.json(); 
    
    if(!res.ok){
      throw new Error('Failed to fetch Places')
    }
    return resData.places;
} 

export async function updateUserPlaces(places){
    const response = await fetch('http://localhost:3000/user-places',{
        method: 'PUT',
        body: JSON.stringify({places}),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    let resData = await response.json();

    if(!response.ok){
        throw new Error('Failed to Update the Users');
    }

    return resData.message;

}