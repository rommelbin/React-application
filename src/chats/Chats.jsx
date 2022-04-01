import React from "react";
import { List, ListItemText } from "@material-ui/core"
import {Link} from "react-router-dom"
function Chats({ chats }) {

    let areChatsEmpty = () => chats.length === 0 ? true : false;
    let listOfChats = areChatsEmpty() ?  "Чатов нет!" : chats.map(chat => <ListItemText key={chat.id}>
        <Link key={chat.id} to={`/chats/${chat.id}`}>
            {chat.name}
        </Link>
    </ListItemText>)


    return (
        <div className="chats">
            <div className="initChat">
                Массив чатов!
            </div>
            <List>
                {listOfChats}
            </List>
        </div>
    )
}


export default Chats;