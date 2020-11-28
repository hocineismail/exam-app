import React from 'react'

export default function HomeComponent(props) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6' style={{marginTop: '20%'}}>
                    <h1 style={{margin: '10% 0px', fontSize: '3rem'}}>Javascript Online Quiz</h1>
                    <p style={{margin: '10% 0px', fontSize: '1.5rem'}}>Following quiz provides Multiple Choice Questions (MCQs) related to Javascript Framework.</p>
                    <button 
                        className='btn btn-primary' 
                        style={{borderRadius: '50px', fontSize: '1.2rem'}}
                        onClick={props.onClick}
                        >Start Quiz</button>
                </div>
                <div className='col-md-6' style={{marginTop: '20%'}}>
                    <img 
                        src='https://cdn.pixabay.com/photo/2016/10/12/19/54/homework-1735644_960_720.png'  
                        style={{height: '70%', width: '100%'}} />
                </div>
            </div>
        </div>
    )
}
