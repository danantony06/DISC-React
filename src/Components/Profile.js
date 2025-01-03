import './Profile.css';
import React, { useState, useEffect } from "react";

function Profile({picture,Fname, Lname, sport,biography}){
    const [pic,setColor] = useState('https://i.postimg.cc/xTQK0BC3/Screenshot-2024-12-27-113314.png')
    const [count,setCount] = useState(0)
  
    const [cardColor, setCardColor] = useState("#D9D9D9");

    const CardClick = () => {
      setCardColor((prevColor) =>
        prevColor === "#D9D9D9" ? "orange" : "#D9D9D9" 
      );
    };

    const handleClick = () =>{
    setColor(pic === 'https://i.postimg.cc/xTQK0BC3/Screenshot-2024-12-27-113314.png' ? 'https://i.postimg.cc/vBKGJvwV/Screenshot-2024-12-27-191621.png': 'https://i.postimg.cc/xTQK0BC3/Screenshot-2024-12-27-113314.png');
    setCount(count + 1)
  }

   
 
    useEffect(() =>{

        console.log(`The count has changed ${count} many times`);
    },[count]);
    
    return(
        <div className="profile-card" onClick = {CardClick} style={{ backgroundColor: cardColor }}>
        <img className = "profilePic" src={picture}></img>
        <span className = "line"> </span>
        <div className="profile-info">
          <h3>{Fname} {Lname} | {sport}</h3>
          <p className = "bio">{biography}</p>
          <img onClick = {handleClick} className = "likePic" src = {pic} alt = "likePic"></img>
        </div>
      </div>
    );
}

export default Profile;