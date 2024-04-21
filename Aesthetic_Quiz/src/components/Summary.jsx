import QUESTIONS from '../questions';
import win from "../assets/quiz-complete.png";
export default function Summary({userAnswer}){
    const skipans = userAnswer.filter(
        (answer) => answer === null);
    console.log("the length of skipped is " + skipans.length);
    const corans = userAnswer.filter(
        (answer,index) => answer === QUESTIONS[index].answers[0]);
    console.log("the length of correct is " + corans.length);
    console.log("The length is "+ userAnswer.length)
    const skipper = Math.round(skipans.length / userAnswer.length * 100);
    console.log("skipper " + skipper);
    const corper = Math.round(corans.length / userAnswer.length * 100); 
    console.log("corper " + corper)
    const wroper = 100 - skipper - corper;
    console.log(skipans);
    console.log(corans);
    return(
     <div id="summary">
        <img src={win} alt="win logo" />
        <h2>Quiz Completed!</h2>
        <div id="summary-stats">
            <p>
                <span className="number">{skipper}%</span>
                <span className="text">skipped</span>
            </p>
            <p>
                <span className="number">{corper}%</span>
                <span className="text">answered correctly</span>
            </p>
            <p>
                <span className="number">{wroper}%</span>
                <span className="text">answered incorrectly</span>
            </p>
        </div>
        <ol>
            {userAnswer.map( (answer, index) => {
                let css = 'user-answer';

                if(answer === null){
                    css += ' skipped'
                }
                else if( answer === QUESTIONS[index].answers[0]){
                    css += ' correct'
                }
                else{
                    css +=' wrong'
                }
                return(
                    <li key ={index}>
                        <h3>{index+1}</h3>
                        <p className='question'>{QUESTIONS[index].text}</p>
                        <p className={css}>{answer ?? 'skipped'}</p>
                    </li> 
                )

                })} 
        </ol>
     </div>
    )
}