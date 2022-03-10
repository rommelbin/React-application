import Message from "./Message";
import React, {useState} from "react";
// use State позволяет добавлять состояние к компонентам 
function App() {
  const [messageList, setMessageList]  = useState([])

  const getObjects = () =>  {
    return [
  {
      author: "Роулинг",
      text: "Гарри Поттер"
  },
  {
      author: "Пушкин",
      text: "Евгений Онегин"
  }]
  }

  return (
    <div className="App">
      <Message getItems={getObjects}></Message>
    </div>

  );
}
export default App;
