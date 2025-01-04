
import './App.css';
import Users from '../Routing&Fetching/UserCards.js';
import Home from './Home.js';
import UserId from '../Routing&Fetching/UserId.js';
import {Routes, Route } from "react-router-dom";
import CreateUser from '../Routing&Fetching/CreateUser.js';
import Login from '../Routing&Fetching/Login.js';


function App() {
  return (
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path ="/Users" element = {<Users />} />
          <Route path = "/Users/:id" element = {<UserId />} />
          <Route path = "/Users/create" element = {<CreateUser />} />
          <Route path="/login" element={<Login />} />
        </Routes>
  );
}

export default App;

