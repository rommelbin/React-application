import Message from "./Message";
import React, { useEffect, useState } from "react";
import InputMessage from "./InputMessage";
import Chats from "./chats/Chats"
import { ThemeProvider, createTheme } from "@material-ui/core";
// use State позволяет добавлять состояние к компонентам 
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FF9800",
      },
      secondary: {
        main: "#0098FF",
      },
    },
  });
  let [messages, setMessages] = useState([
    {
      text: "Гарри Поттер",
      id: 1
    },
    {

      text: "Евгений Онегин",
      id: 2
    }])
  let [chats, setChats] = useState([
    {
      name: "Чат алкоголиков",
      id: 1
    },
    {
      name: "Чат трудоголиков",
      id: 2
    },
    {
      name: "Чат шопоголиков",
      id: 3
    }
  ])
  function addMessage(text) {
    setMessages(messages.concat([{
      text,
      id: Date.now()
    }]))
  }
  useEffect(() => {
    setTimeout(answerBot, 1500)
  })
  let answerBot = () => console.log("Бот приветствует   смертного")
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Chats chats={chats}></Chats>
      <div className="MessageWrapper">
        <InputMessage onCreate={addMessage}></InputMessage>
        <Message messages={messages}></Message>
      </div>
      </ThemeProvider>
    </div>
  );
}
export default App;
