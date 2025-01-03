import React, { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import { useParams } from 'react-router-dom';
import './UserId.css'


function UserId(){
    const {id} = useParams();
    const [user,setUser] = useState(null);

    useEffect(() => {
        fetch(`https://disc-assignment-5-users-api.onrender.com/api/users/${id}`)
        .then(response => response.json())
        .then(data => {
            setUser(data);

    })

},[id]);

if (!user) {
    return (
      <div>
        <NavBar />
        <p>User not found or an error occurred.</p>
      </div>
    );
  }
    return (
        <div>
        <NavBar/> 

        <div className="profile-card">
        <span className = "line"> </span>
        <div className="profile-info">
          <h3>{user.firstname} {user.lastname}</h3>
          <h5>{user.email}</h5>
          <p className = "bio">{user.bio}</p>
          <h6>{user.major}</h6>
        </div>
      </div>
      </div>
  );
}

export default UserId;