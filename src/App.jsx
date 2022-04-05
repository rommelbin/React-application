import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Profile from "./Profile";
import { createStore } from "redux";
import Chats from "./chats/Chats";
import SingleChat from "./chats/SingleChat";
import { Provider as ReduxProvider } from "react-redux"
import profileReducer from "./store/profile/reducer"
// use State позволяет добавлять состояние к компонентам 
function App() {
  const store = createStore(
    profileReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
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
    <ReduxProvider store={store}>
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
    </ReduxProvider>
  );
}

export default App;
