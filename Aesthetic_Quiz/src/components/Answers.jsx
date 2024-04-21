import { useRef } from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelect}){
    const shuffledAnswers = useRef()
    if(!shuffledAnswers.current){
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }
    return(
        <ul id="answers">
        {shuffledAnswers.current.map((answer) => {
        let cssclasses='';
        const isSelected =  selectedAnswer === answer;

        if(answerState === 'answered' && isSelected)
        {
            cssclasses='selected';
        }

        if((answerState === 'correct' || answerState === 'wrong') && isSelected){
            cssclasses = answerState;
            }   
        return(
        <li key={answer} className="answer" >
            <button onClick={() => onSelect(answer)} className={cssclasses} disabled={ answerState !== ''}>{answer}</button>
        </li>
        )
        })}     
        </ul>
    )

}