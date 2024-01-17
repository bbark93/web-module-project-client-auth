import React from "react";
import "./App.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";

import Login from "./Components/Login";
import FriendsList from "./Components/FriendsList";
import AddFriend from "./Components/AddFriend";

function App() {
  return (
    <div className="App">
      <header>
        <h2>Friends Database</h2>
        <Link className="link" to='login'>Login</Link>
        <Link className="link" to='friends'>Friends List</Link>
        <Link className="link" to='friends/add'>Add Friends</Link>
        <Link className="link" to='login'>Logout</Link>
      </header>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/friends" element={<FriendsList />} />
        <Route path="/friends/add" element={<AddFriend />} />
      </Routes>
    </div>
  );
}

export default App;
