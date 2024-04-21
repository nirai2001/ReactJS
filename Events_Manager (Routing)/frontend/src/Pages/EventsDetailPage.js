import {redirect, useRouteLoaderData } from 'react-router-dom'
import EventItem from '../components/EventItem.js'
export default function EventsDetailPage(){
    const data = useRouteLoaderData('detail');
    return (
        <EventItem event={data.event}/>
    )
}

export async function Loader({request,params}){
    const id = params.id    
    const response = await fetch('http://localhost:8080/events/'+ id)
    if(!response.ok){
        throw { message : 'Could not Fetch Data'}
    }
    else{
        return response
    }
}

export async function action({params,request}){
    const id = params.id;
    const response = await fetch('http://localhost:8080/events/'+ id,{
        method: request.method
    })
    if(!response.ok){
        throw ("error occured")
    }
    return redirect('/events')
}