import { useEffect, useState } from "react";

export default function QuestionTimer({timeOut, onTimeOut, mode}){
    const [remainingTime,setRemainingTime] = useState(timeOut);

    useEffect(() => {
        const tim= setTimeout(onTimeOut,timeOut);

        return () => {
            clearTimeout(tim)
        }
    }, [timeOut,onTimeOut])

    useEffect(() => {
        const int = setInterval(() => {
            setRemainingTime((prev) => prev-100);
        },100);
        
        return () => {
            clearInterval(int)
        }
    },[])

    return <progress id="question-time" max={timeOut} value={remainingTime} className={mode}/> 

}