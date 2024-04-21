import EventForm from '../components/EventForm.js'
import { useRouteLoaderData } from 'react-router-dom'
export default function EditEventPage(){
    const data = useRouteLoaderData('detail');
    const event = data.event
    return <EventForm method="patch" event={event}/>
}