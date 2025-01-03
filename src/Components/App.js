
import './App.css';
import UserCards from '../Routing&Fetching/UserCards.js';
import Home from './Home.js';
import UserId from '../Routing&Fetching/UserId.js';
import {Routes, Route } from "react-router-dom";
import CreateUser from '../Routing&Fetching/CreateUser.js';


function App() {
  return (
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path ="/UserCards" element = {<UserCards />} />
          <Route path = "/UserCards/:id" element = {<UserId />} />
          <Route path = "/UserCards/createUser" element = {<CreateUser />} />
        </Routes>
  );
}

export default App;

