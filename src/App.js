import Message from "./Message";

function App() {
  const textMessage = "Этот текст создан простыми людьми для простых людей."; 
  return (
    <div className="App">
      Приветствую вас!
    <Message text={textMessage}/>
    </div>
    
  );
}

export default App;
