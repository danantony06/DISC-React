import React, { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import { useParams } from 'react-router-dom';
import './UserId.css'


function UserId(){
    const {id} = useParams();
    const [user,setUser] = useState(null);

    useEffect(() => {
        fetch(`https://api-iffvi7ahr-daniel-antonys-projects-582fc591.vercel.app/users/${id}`)
        .then(response => response.json())
        .then(data => {
            setUser(data[0]);
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
          <h3>{user.first_name} {user.last_name}</h3>
          <h5>{user.email}</h5>
          <p className = "bio">{user.bio}</p>
          <h6>{user.major}</h6>
        </div>
      </div>
      </div>
  );
}

export default UserId;