import React , {useState} from 'react'
import HomeComponent from '../components/HomeComponent'
import ItemReponse from '../components/ItemReponse';
import Result from '../components/Result';
import questions from '../Questions/Question'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function Home() {
    const [isStarted, setIsStarted] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [timer, setTimer] = useState(30);
    const [stopTiming, setstopTiming] = useState();
    const [questionNumber, setquestionNumber] = useState(1)
    const [score, setscore] = useState(0)
    const [displayCorrectReponse, setdisplayCorrectReponse] = useState(false)
    const [selected, setselected] = useState({
        value: false,
        selectedId: ''
    })

    const onStartQuiz = () => {
        setIsStarted(true)
        
    }
  
    React.useEffect(() => {
         if (isStarted) {
               StartTimer()
              return () => {
                const clear = window.clearInterval(stopTiming); 
                setstopTiming(clear)
              };
         }
      }, [isStarted]);
    
      React.useEffect(() => { 
             if (timer === 0) {
                const clear = window.clearInterval(stopTiming); 
                setstopTiming(clear) 
                onPassQuestion()
             } 
           
     }, [timer]);


     function reStartTimer() {
        const clear = window.clearInterval(stopTiming);
        setstopTiming(clear)
        setTimer(30);  
        StartTimer()
     }

     function StartTimer() {
        const time =   window.setInterval(() => {
            setTimer(prevTime => prevTime - 1); 
          }, 1000);
          setstopTiming(time)
     }

    const onFinishQuiz = () => {
        const clear = window.clearInterval(stopTiming);
        setstopTiming(clear)
        const upscore = selected.value ? (score + 1) : score
        setscore(upscore)

        
        setdisplayCorrectReponse(true) 
        setTimeout(()=> {
        setquestionNumber(prevQuestion => prevQuestion + 1); 
        setIsFinished(true)
        }, 4000)
    }

    const onPassQuestion = () => {
        const upscore = selected.value ? (score + 1) : score
        setscore(upscore)
       
        console.log(questions.length === questionNumber.length, questions.length, questionNumber)
        const clear = window.clearInterval(stopTiming);
        setstopTiming(clear)

        setdisplayCorrectReponse(true) 
        setTimeout(()=> {
            setdisplayCorrectReponse(false) 
            reStartTimer()
            setselected({
                value: false,
                selectedId: ''
            })
            if (questions.length === questionNumber) {
                const clear = window.clearInterval(stopTiming);
                setstopTiming(clear)
                onFinishQuiz() 
             } else {
                setquestionNumber(prevQuestion => prevQuestion + 1); 
             } 
        }, 4000)
         

       
    }

    const onChooseReponse = (reponse) => {
        if(!displayCorrectReponse) {
            const data = {
                value: reponse.status,
                selectedId: reponse._id
            }
            setselected(data)
        }
        else 
        { 
            return
        }

    }
    const onRestartQuiz = () => {
        const clear = window.clearInterval(stopTiming); 
        setstopTiming(clear) 
        setdisplayCorrectReponse(false) 
        setIsStarted(true);
        setIsFinished(false);
        setTimer(30); 
        setquestionNumber(1)
        setscore(0)
        setselected({
            value: false,
            selectedId: ''
        })
    }
    return (
        !isStarted ? 
           <HomeComponent onClick={onStartQuiz} />
        : isStarted && !isFinished ?
           <div className='container'>
               <div style={{display: 'block', margin: '1% auto', width: '100px'}}>
               <CircularProgressbar value={(timer * 100) / 30}  text={`${timer}`} 
                    styles={buildStyles({
      
                        textSize: '36px',
                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,
                    
                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',
                    
                        // Colors
                        pathColor: `rgba(62, 152, 199, ${(timer * 100) / 30})`,
                        
                        backgroundColor: '#3e98c7',
                    })}
                   />;
                </div>
              {questions.map(item =>  
                    <div style={{margin: '20px', display:  item._id === questionNumber ? 'block' : " none"}}> 
                    
                        <h4>{item._id} - {item.question}</h4>
                        <hr />
                        <div className='row'>
                            {item.response.map(itemReponse =>
                                <div className='col-md-6' >
                                    <ItemReponse 
                                        response={itemReponse.response} 
                                        selected={itemReponse._id === selected.selectedId ? true : false}
                                        displayCorrectReponse={displayCorrectReponse}
                                        isReponse={itemReponse.status}
                                        onClick={() => onChooseReponse(itemReponse)}
                                    />                                       
                                </div>
                                )}

                        </div>
                        {questions.length ===  item._id ? 
                            <button 
                                className='btn btn-primary' 
                                style={{borderRadius: '50px', fontSize: '1.2rem'}}
                                onClick={onFinishQuiz}
                                disabled={displayCorrectReponse}
                               >Finish Quiz</button>
                        : 
                        <button 
                            className='btn btn-primary' 
                            style={{borderRadius: '50px', fontSize: '1.2rem'}}
                            onClick={onPassQuestion}
                            disabled={displayCorrectReponse}
                        >Next Quiz</button>}
                    </div>

               )}
           </div>
           : <div>
                <Result score={score} questionNumber={questions.length} />
                <button 
                className='btn btn-primary' 
                style={{borderRadius: '50px', fontSize: '1.2rem'}}
                onClick={onRestartQuiz}
            >Retarts Quiz</button>
            </div>
      
    )
}
