import React, {useState} from 'react'

function Quote(){
const [quote, setQuote]= useState(null)

const eventHandler= (e) => setQuote(e.target.value)

    return (
        < section>
        <div className='box'>
            <lable>Enter your question here.</lable>
            <input onChange={eventHandler} type='text' />
        </div>
        {
            (quote) ? <p>Sorry! There is not any specific answer for: <em>{quote}</em></p> : null
        }
        
        </ section>
    )
}

export default Quote