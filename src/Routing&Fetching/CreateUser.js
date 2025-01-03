import './CreateUser.css';
import React, { useState } from 'react';
import Button from "../Components/Button.js";


function CreateUser() {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [bio, setbio] = useState('');
    const [major, setmajor] = useState('');
    const [gradyear, setgradyear] = useState('');
    const [profilepic, setprofilepic] = useState(null);

  
    const handleSubmit = async (e) => {
        console.log(firstname)
        e.preventDefault();
        const formData = new FormData();
        formData.append('firstName', firstname);
        formData.append('lastName', lastname);
        formData.append('email', email);
        formData.append('bio', bio);
        formData.append('major', major);
        formData.append('graduationYear', gradyear);
        formData.append('profilePicture', profilepic);
        console.log(formData.getAll('bio'))
        
        try {
            const response = await fetch(
                "https://disc-assignment-5-users-api.onrender.com/api/users",
                {
                    method: 'POST',
                    body: formData,
                }
            );
            if (response.ok) {
                alert('User created successfully!');
                setfirstname('');
                setlastname('');
                setemail('');
                setbio('');
                setmajor('');
                setgradyear('');
                setprofilepic(null);
            } else {
                const errorText = await response.text();
                console.error("Error response:", errorText);
                alert('Failed to create user');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while creating the user.');
        }
    }

      

return(
<form id="userinfo" onSubmit={handleSubmit}>
  <p>
    <label htmlFor="firstname">Enter your First name:</label>
    <input type="text" id="firstname" name="firstname" value = {firstname} onChange={(e) => setfirstname(e.target.value)} />
  </p>
  <p>
    <label htmlFor="lastname">Enter your Last name:</label>
    <input type="text" id="Lastname" name="Lastname" value = {lastname} onChange={(e) => setlastname(e.target.value)}/>
  </p>
  <p>
    <label htmlFor="Email">Enter your Email:</label>
    <input type="text" id="Email" name="Email" value = {email} onChange={(e) => setemail(e.target.value)}/>
  </p>
  <p>
    <label htmlFor="bio">Enter your Bio:</label>
    <input type="text" id="Bio" name="Bio" value = {bio} onChange={(e) => setbio(e.target.value)}/>
  </p>
  <p>
    <label htmlFor="Major">Enter your Major:</label>
    <input type="text" id="Major" name="Major" value = {major} onChange={(e) => setmajor(e.target.value)} />
  </p>
  <p>
    <label htmlFor="Graduation Year">Enter your Graduation Year:</label>
    <input type="text" id="Graduation" name="Graduation" value={gradyear} onChange={(e) => setgradyear(e.target.value)} />
  </p>
  <p>
    <label htmlFor="avatar">Select a Profile Pic</label>
    <input type="file" id="ProfilePic" name="ProfilePic" onChange={(e) => setprofilepic(e.target.files[0])}/>
  </p>
  <Button text = {"Submit Me"} />
</form>
);
}
export default CreateUser;