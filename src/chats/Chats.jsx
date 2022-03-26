import React from "react";
import { List, ListItemText } from "@material-ui/core"
import { useTheme } from "@material-ui/styles";
function Chats({ chats }) {
    const thema = useTheme();
    
    let areChatsEmpty = () => chats.length === 0 ? true : false;

    let listOfChats = areChatsEmpty() ?  "Чатов нет!" : chats.map(chat => <ListItemText key={chat.id}>{chat.name}</ListItemText>)
    
    return (
        <div className="Chats" style={{
            backgroundColor: thema.palette.primary.main,
            borderColor: thema.palette.secondary.main
        }}>
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