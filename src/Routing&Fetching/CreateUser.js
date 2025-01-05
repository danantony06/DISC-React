import './CreateUser.css';
import React, { useState } from 'react';
import Button from "../Components/Button.js";
import NavBar from '../Components/NavBar.js';
import Footer from '../Components/Footer.js';



function CreateUser() {
    const [first_name, setfirstname] = useState('');
    const [last_name, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [bio, setbio] = useState('');
    const [date_of_birth, setdob] = useState('');
    const [profilepic, setprofilepic] = useState(null);

  
    const handleSubmit = async (e) => {
        console.log(first_name)
        e.preventDefault();
        const userInfo = document.querySelector("#userinfo");
        const formData = new FormData(userInfo);
        // formData.append('first_name', first_name);
        // formData.append('date_of_birth', date_of_birth);
         //formData.append('last_name', last_name);
        // formData.append('email', email);
        // formData.append('bio', bio);
        // formData.append('major', major);
        // formData.append('graduationYear', gradyear);
        // formData.append('profilePicture', profilepic);
        //console.log(formData.getAll('first_name'))
       // console.log(formData.getAll('date_of_birth'))
        
        const formObject = Object.fromEntries(formData.entries());

        console.log(formObject);

        console.log('form data: ' + JSON.stringify(formData));
        try {
          formData.forEach((value, key) => console.log(key, value));

          console.log('form data: ' + JSON.stringify(formData));

            const response = await fetch(
                "http://localhost:3004/users/create",
                {
                    method: 'POST',
                    headers: {
                      'Content-Type': "application/json",
                      
                     
                    },
                    body: JSON.stringify(formObject)
                    
                }
            );
            if (response.ok) {
                alert('User created successfully!');
                setfirstname('');
                setlastname('');
                setemail('');
                setbio('');
                setdob('');
                setprofilepic(null);
            } else {
                alert('Failed to create user');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while creating the user.');
        }
    }

      

return(
  <div className= "FormContainer">
    <NavBar/> 
<form id="userinfo" onSubmit={handleSubmit}>
  <p className='FormText'>
    <label htmlFor="first_name" className='FormLabel'>Enter your First name:</label>
    <input type="text" id="first_name" name="first_name" value = {first_name} onChange={(e) => setfirstname(e.target.value)} />
  </p>
  <p className='FormText'>
    <label htmlFor="last_name" className='FormLabel'>Enter your Last name:</label>
    <input type="text" id="last_name" name="last_name" value = {last_name} onChange={(e) => setlastname(e.target.value)}/>
  </p>
  <p className='FormText'>
    <label htmlFor="Email" className='FormLabel'>Enter your Email:</label>
    <input type="text" id="email" name="email" value = {email} onChange={(e) => setemail(e.target.value)}/>
  </p>
  <p className='FormText'>
    <label htmlFor="date_of_birth" className='FormLabel'>Enter your DOB:</label>
    <input type="date" id="dob" name="date_of_birth" value = {date_of_birth} onChange={(e) => setdob(e.target.value)}/>
  </p>
  <p className='FormText'>
    <label htmlFor="Bio" className='FormLabel'>Bio:</label>
    <input type="text" id="Bio" name="bio" value={bio} onChange={(e) => setbio(e.target.value)} />
  </p>
  <p>
    <label htmlFor="avatar">Select a Profile Pic</label>
    <input type="file" id="ProfilePic" name="ProfilePic" onChange={(e) => setprofilepic(e.target.files[0])}/>
  </p>
  <Button className = "SubmitButton" text = {"Submit Me"} />
</form>
<Footer />
</div>
);
}
export default CreateUser;