import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const events = useLoaderData();
  if(events.isError){
    return <p>Could not fetch the datas</p>
  }
  return (
     <EventsList events={events} />
  );
}

export default EventsPage;

export async function Loader(){
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
      throw { message : 'Could not Fetch Data'}
    } else {
      const resData = await response.json();
      return resData.events
    }
}