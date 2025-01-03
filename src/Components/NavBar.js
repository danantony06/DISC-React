import './NavBar.css';
import {Link } from "react-router-dom";

function NavBar() {
    return(
      <div>
        <div className = "headerText"> <h3 className = "title">COURT CREW</h3>
        <span className = "navBar"> <Link to="/userCards" className='pages'>User List</Link> <h3 className = "pages" id = "Profiles" >Profiles</h3> <h3 className = "pages">Create Profile</h3> <h3 className = "pages">Contact</h3></span> </div>
     <div className = "headerLine"></div>
      </div>
      
    );
  }


  export default NavBar;