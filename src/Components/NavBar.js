import './NavBar.css';
import {Link } from "react-router-dom";

function NavBar() {
    return(
      <div>
        <div className = "headerText"> <h3 className = "title">COURT CREW</h3>
        <span className = "navBar"> <Link to="/" className='pages'>Discover Profiles</Link> <Link to="/Users" className='pages'>User List</Link> <Link to="/Users/create" className='pages'>Create Profile</Link> <Link to="/login" className='pages'>Sign In </Link></span> </div>
     <div className = "headerLine"></div>
      </div>
      
    );
  }


  export default NavBar;