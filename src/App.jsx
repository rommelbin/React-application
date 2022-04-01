import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Profile from "./Profile";
import Chats from "./chats/Chats";
import SingleChat from "./chats/SingleChat";
// use State позволяет добавлять состояние к компонентам 
function App() {
  let [chats] = useState([
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
  let getChat = (id) => chats.find(chat => {
    if (chat.id === Number(id)) {
      return true
    }
    return false
  })

  return (
    <Router>
      <Header />
      <div className="App">

        <div className="Main">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/chats" element={<Chats chats={chats} />}>
            </Route>
            <Route path="chats/:id" element={<SingleChat getChat={getChat} />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
