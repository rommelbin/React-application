import React, { } from 'react';


const Message = ({messages}) => {
        
    return messages.map(message => <div key={message.id}>Сообщение: {message.text}</div>)
};

export default Message;