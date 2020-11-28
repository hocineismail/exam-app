import React from 'react'

export default function Result(props) {
     const [success, setsuccess] = React.useState(true)
     function calculateResult () {
        const calculat = (props.score * 100 )/ props.questionNumber
        if (calculat > 75) {
            setsuccess(true)
        } else {
            setsuccess(false)
        }
     }
     React.useEffect(() => {
        calculateResult()
     }, [])
    return (
        <div style={{color: success ? 'green' : 'red'}}>
        <div style={{margin: '10% auto 0% auto', display: 'block', textAlign: 'center', height: '250px', width: '250px',borderRadius: '100%', border: '10px solid', borderColor: success ? 'green' : 'red' }}>
            <h1 style={{fontSize: '4rem', paddingTop: '80px'}}>{((props.score * 100 )/ props.questionNumber).toFixed(2)}</h1>
        </div>
 
        <p style={{fontSize: '2rem', paddingTop: '80px',textAlign: 'center'}}>
               {success ? 'Congratulations on your well-deserved success' : 'Failure is only the opportunity to begin again more intelligently'  }
        </p> 
        </div>
   )
}
