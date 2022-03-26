import React, { useEffect, useState } from "react";
import { TextField, Button } from "@material-ui/core"

function InputMessage({ onCreate }) {
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
            <div>Отправь сообщение!</div>
            <div className=""><TextField id="filled-basic" label="Filled" variant="filled" value={message} onChange={event => setMessage(event.target.value)} /></div>
            <div className=""><Button variant="outlined" type="submit">Создать сообщение</Button></div>
        </form>
    )
}

export default InputMessage;