import React, { useEffect, useState } from 'react';


const Message = ({getItems}) => {
    
    const [items, setItems] = useState([])
    
    
    useEffect(() => {
        setItems(getItems())
        console.log("update");
    }, [getItems])
    

    return items.map(item => <div key={item.author}>Автор:{item.author}  Произведение: {item.text}</div>)
};

export default Message;