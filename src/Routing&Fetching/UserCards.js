import './UserCards.css';
import NavBar from '../Components/NavBar.js';

import React, { useState, useEffect } from 'react';

function UserCards(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://disc-assignment-5-users-api.onrender.com/api/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data);

        });
    }, []);
    return(
        <div>
        <NavBar/> 

        {users.map(user => (
        <div className="profile-card">
        <img className = "profilePic" src={user.profilePicture} alt={`${user.firstName} profile`}></img>
        <span className = "line"> </span>
        <div className="profile-info">
          <h3>{user.firstname} {user.lastname}</h3>
          <h5>{user.email}</h5>
          <p className = "bio">{user.bio}</p>
          <h6>{user.major}</h6>
        </div>
      </div>
      ))}
      </div>

    );
}

export default UserCards;