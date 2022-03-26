import Message from "./Message";
import React, { useEffect, useState } from "react";
import InputMessage from "./InputMessage";
// use State позволяет добавлять состояние к компонентам 
function App() {
  let [messages, setMessages] = useState([
  {
      text: "Гарри Поттер",
      id: 1
  },
  {
      
      text: "Евгений Онегин",
      id: 2
  }])

  function addMessage(text) 
  {
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
      <InputMessage onCreate={addMessage}></InputMessage>
      <Message messages={messages}></Message>
    </div>

  );
}
export default App;
