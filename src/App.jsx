import Message from "./Message";
import React, {} from "react";
// use State позволяет добавлять состояние к компонентам 
function App() {

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
