import React, { useEffect, useState } from "react";


function InputMessage({onCreate}) 
{
    const submitHandler = (e) => {
        e.preventDefault()
        if (message.trim()) {
            onCreate(message)
            setMessage('')
        }
    }

    let [message, setMessage] = useState('');

    return (
        <form onSubmit={submitHandler}>
            <input type="text" autoFocus value={message} onChange={event => setMessage(event.target.value)} />
            <button type="submit">Создать сообщение</button>    
        </form>
    )
}

export default InputMessage;