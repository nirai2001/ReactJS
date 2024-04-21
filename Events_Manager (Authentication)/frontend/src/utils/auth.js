import { redirect } from "react-router-dom";

export function getAuthToken(){
    const token = localStorage.getItem('token');
    return token;
}

export function getAuthLoader(){
    const token = getAuthToken();
    return token;
}

export function checkAuthLoader(){
  const token = getAuthToken()

  if(!token){
    redirect('/auth')
  }
}