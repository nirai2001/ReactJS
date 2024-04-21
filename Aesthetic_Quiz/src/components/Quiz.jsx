import { useCallback, useState } from "react"
import QUESTIONS from "../questions.js"
import Question from "./Question.jsx"
import Summary from "./Summary.jsx"

export default function Quiz(){
    const [userAnswers,setUserAnswers] = useState([]);
    const activeQuestionIndex =  userAnswers.length ;
    const isQuizComplete = activeQuestionIndex === QUESTIONS.length;
    const handleSelectAnswer = useCallback(function handleSelectAnswer(ans){
        setUserAnswers((prev) => {
            return [...prev,ans];
        });
    },[]);
    const handleSkip = useCallback(()=>handleSelectAnswer(null),[handleSelectAnswer]) 
    if(isQuizComplete){
        return <Summary userAnswer={userAnswers}/>
    }
    console.log(...QUESTIONS[activeQuestionIndex].answers);


    return(
        <div id="quiz">
            <Question 
            key={activeQuestionIndex} 
            index={activeQuestionIndex}
            onSelectAnswer = {handleSelectAnswer}
            handSkip={handleSkip} />
        </div>
    );
}