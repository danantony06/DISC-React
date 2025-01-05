import './UserCards.css';
import NavBar from '../Components/NavBar.js';
import Footer from '../Components/Footer.js';

import React, { useState, useEffect } from 'react';

function Users(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://api-iffvi7ahr-daniel-antonys-projects-582fc591.vercel.app/users/profiles')
        .then(response => response.json())
        .then(data => {
            setUsers(data);

        })
        .catch((error) => console.error("Error fetching user profiles:", error));
    }, []);
    return(
        <div>
        <NavBar/> 

        <div className='Container'>
        <div className='CardWrap'>
        {users.map(user => (
        <div className="profile-card">
        <img className = "profilePic" src={user.profilePicture} alt={`${user.first_name} profile`}></img>
        <span className = "line"> </span>
        <div className="profile-info">
        <h3 className='Label'><span id = "Name">{user.first_name} {user.last_name}</span> <span id = "DOB">DOB: {user.user_profiles.date_of_birth}</span></h3>
          <p className = "bio">{user.user_profiles.bio}</p>
          <h5>Email: {user.email} </h5>
          
        </div>
      </div>
      ))}
      </div>
      

      <Footer/ >
      </div>
      </div>

    );
}

export default Users;